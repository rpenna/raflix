import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoryRepositories from '../../repositories/categorias';
import DefaultPage from '../../components/DefaultPage';

function Home() {
  const [ initialData, setInitialData ] = useState([]);

  useEffect(() => {
      categoryRepositories.getAllWithVideos()
        .then((categoriesWithVideos) => {
          console.log(categoriesWithVideos);
          setInitialData([
            ...categoriesWithVideos
          ]);
        });
    },
    []
  );

  return (
    <DefaultPage>

      { initialData.length === 0 && (<div>Loading...</div>)}

      { initialData.map((categoryData, index) => {
        if (index === 0) {
          return (
            <div key={ categoryData.id }>
            <BannerMain
              videoTitle={categoryData.videos[0].titulo}
              url={categoryData.videos[0].url}
              videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
            />

            <Carousel
              ignoreFirstVideo
              category={categoryData}
            />

            </div>
          );
        }
        else {
          return (
            <div key={ categoryData.id }>
              <Carousel
                category={categoryData}
              />
            </div>
          );
        }
      })
    }
    </DefaultPage>
  );
}

export default Home;