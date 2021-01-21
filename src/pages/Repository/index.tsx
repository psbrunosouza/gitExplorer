/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryDetails, Issues } from './repository-styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import Pagination from '../../components/Pagination/index';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositories, setRepositories] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [issuesPerPage] = useState<number>(5);

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepositories(response.data);
    });
    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
    setIsLoading(false);
    // realiza a requisicao porem sequencialmente
    // async function loadData(){
    //   const resRepositories = await api.get(`/repos/${params.repository}`);
    //   const resIssues = await api.get(`/repos/${params.repository}`);

    //   setRepositories(resRepositories.data);
    //   setIssues(resIssues.data);
    // }
    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="git-explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repositories && !isLoading && (
        <RepositoryDetails>
          <header>
            <img
              src={repositories.owner.avatar_url}
              alt={repositories.owner.login}
            />
            <div>
              <strong>{repositories.full_name}</strong>
              <p>{repositories.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repositories.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repositories.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositories.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryDetails>
      )}

      {issues && !isLoading && (
        <Issues>
          {currentIssues.map((issue) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={issue.id}
              href={issue.html_url}
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
        </Issues>
      )}

      <Pagination
        totalItems={issues.length}
        itemsPerPage={issuesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
    // <h1>repository: {params.repository}</h1>
  );
};

export default Repository;
