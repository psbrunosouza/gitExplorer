import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './dashboard-style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="git-explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45085894?s=460&u=49bb5eee4513e3bae1a3bc55bf6df57f9cc35e56&v=4"
            alt="Bruno Pinheiro"
          />
          <div>
            <strong>Bruno teste repositorio</strong>
            <p>
              repositório de testes, para um site que está igualmente testando
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45085894?s=460&u=49bb5eee4513e3bae1a3bc55bf6df57f9cc35e56&v=4"
            alt="Bruno Pinheiro"
          />
          <div>
            <strong>Bruno teste repositorio</strong>
            <p>
              repositório de testes, para um site que está igualmente testando
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45085894?s=460&u=49bb5eee4513e3bae1a3bc55bf6df57f9cc35e56&v=4"
            alt="Bruno Pinheiro"
          />
          <div>
            <strong>Bruno teste repositorio</strong>
            <p>
              repositório de testes, para um site que está igualmente testando
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
