import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryDetails, Issues } from './repository-styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="git-explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryDetails>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="teste"
          />
          <div>
            <strong>rocket/unform</strong>
            <p>description</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryDetails>

      <Issues>
        <Link to="asdasasd">
          <div>
            <strong>asdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
    // <h1>repository: {params.repository}</h1>
  );
};

export default Repository;
