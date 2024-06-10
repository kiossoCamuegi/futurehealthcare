import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';

function Blog() {
  return (
    <div className='blog'>
       <div className="wrapper">
            <div className="space">
               <div> <h1>Fique atento as noticias sobre o seu futiuro mais saudavel com a FutureHealthcare ensights</h1></div>
               <div className="txt" >
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestias! Natus reprehenderit iusto at consectetur autem laboriosam temporibus dolor labore, omnis ipsum eum, numquam quidem pariatur sapiente? Rerum, rem eveniet.</p>
                  <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
               </div>
            </div>
            <div className="blog-boxes">
               <div className="v-boxes">
                  <article>
                     <div className="image">
                       <ImageLazyLoading source="https://anatomiadeumaleitora.com/wp-content/uploads/2018/09/caminhada_menopausa.jpg" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>A atividade física, quando integrada no tratamento psicológico, pode ....</h1>
                     <p>As sequelas do AVC, de gravidade variável, dependem da área do cérebro que foi afetada e incluem: alterações da força muscular, sensibilidade e equilíbrio (com consequente dificuldade na marcha e na fala),  habitualmente um impacto direto relevante na qualidade de vida de quem sofre o AVC...</p>
                  </article>
                  <article>
                     <div className="image">
                         <ImageLazyLoading source="https://exlibris.lib.wvu.edu/files/9e6aa622-537b-4325-a7ee-bd0afd6073dd/656x451?cb=0da210c35514089c0f2079c543c4439a" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>A atividade física, quando integrada no tratamento psicológico, pode ....</h1>
                     <p>É importante estar atento aos sinais de alarme que podem indicar a necessidade de apoio psicológico:  perda de interesse em atividades antes prazerosas, alterações no sono ou apetite, sentimentos persistentes de tristeza ou um vazio, bem como pensamentos sobre auto-mutilação ou até mesmo suicidas, entre outros...</p>
                  </article>
               </div>
               <article className='vt-box'>
                     <div className="image">
                        <ImageLazyLoading source="https://santistadecora.com.br/dicas/wp-content/uploads/2022/01/AdobeStock_283748799-1003x590.jpeg" />
                     </div>
                    <div className="text">
                    <div className="step">Nova</div>
                     <h1>A atividade física, quando integrada no tratamento psicológico, pode ....</h1>
                     <p>A inclusão da atividade física num plano de tratamento, não apenas como uma atividade para a saúde física, mas também como uma prática enriquecedora na manutenção ou recuperação da saúde mental e emocional, pode reforçar significativamente os resultados. Caso tenha alguma dúvida procure ajuda profissional. O tratamento é um passo crucial na recuperação...</p>
                    </div>
                  </article>
            </div>

       </div>
    </div>
  )
}

export default Blog