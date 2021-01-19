/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryDetails, Issues } from './repository-styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

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

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepositories(response.data);
    });
    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
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

      {repositories && (
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

      <Issues>
        {issues.map((issue) => (
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
    </>
    // <h1>repository: {params.repository}</h1>
  );
};

export default Repository;
