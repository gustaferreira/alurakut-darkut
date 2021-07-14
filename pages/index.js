import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/libss/AlurakutCommons.js';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {

  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}


  export default function Home() {
  const usuarioAleatorio = 'gustaferreira';
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Eu odeio o Facebook',
    image: 'data:image/jpeg;base64,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'
  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'Diegotbc',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'juunegreiros',
  ]

  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github 
  React.useEffect(function() {
    fetch('https://api.github.com/users/gustaferreira/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })
  }, [])


  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return (
      <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que está planejando?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Nome da comunidade"
                  name="title"
                  aria-label="Nome da comunidade"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="URL da imagem para usarmos de capa"
                  name="image"
                  aria-label="URL da imagem para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Seguidores" items={seguidores} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    )
  }
  