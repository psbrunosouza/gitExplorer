/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Title,
  Form,
  Repositories,
  Error,
  Description,
} from './dashboard-style';
import logoImg from '../../assets/logo.svg';
import Pagination from '../../components/Pagination';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [searchedRepository, setSearchedRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [repositoriesPerPage] = useState<number>(5);

  const indexOfLastRepository = currentPage * repositoriesPerPage;
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searchedRepository) {
      setInputError('digite um usuario/repositório válido');
      return;
    }

    try {
      const response = await api.get(`/repos/${searchedRepository}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setSearchedRepository('');
      setInputError('');
    } catch (err) {
      setInputError('erro na busca por um repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="git-explorer" />
      <Title>Explore repositórios no Github</Title>
      <Description>
        Para realizar uma busca digite autor/repositorio exemplo: facebook/react
      </Description>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          onChange={(e) => setSearchedRepository(e.target.value)}
          value={searchedRepository}
          placeholder="digite o nome do repositório"
          type="text"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {currentRepositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>

      <Pagination
        totalItems={repositories.length}
        itemsPerPage={repositoriesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Dashboard;
