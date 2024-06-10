import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'

function Header() {
  return (
    <div className='fh-header' >
        <div className="wrapper">
            <div className="header-content">
                <aside className="text">
                    <h2 className="text-main">SEJA SAUDAVEL</h2>
                    <h1>Soluções de de tratamentos saudaveis para uma vida melhor.</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quibusdam laborum eum reiciendis 
                      quia omnis voluptatem quas a nemo eius dolorum, corporis tenetur dignissimos magni id cumque asperiores laboriosam molestias.
                    </p>
                    <button className="btn bg-main">Entrar em contacto</button><br /><br />
                    <small className='text-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </aside>
                <aside className="image">
                  <ImageLazyLoading source={"https://i.ytimg.com/vi/sppZespWdPY/maxresdefault.jpg"} alt="" /> 
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                </aside>
            </div>
        </div>
    </div>
  )
}

export default Header