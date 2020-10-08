const slideElements = [
    {
        img: "url(images/image1.jpg)",
        tekst: 'My projects...'

    },
     {
        img: "url(images/image2.jpg)",
        tekst: '...are..'
     },
      {
        img: "url(images/image3.jpg)",
        tekst: '...really..'
      },
      {
        img: "url(images/image4.jpg)",
        tekst: 'amazing!!!'
      },
      {
        img: "url(images/image5.jpg)",
        tekst: ' ;-)'
      }
    ]







      const div = document.querySelector('div')
      const text = document.querySelector('h1')
      let active = 0;


      
      banerStart = () => {
        active++
          console.log('dziala')
          if(active === slideElements.length){
              active = 0;
          }
         
          div.style.backgroundImage = slideElements[active].img
          
          text.textContent = slideElements[active].tekst
      }

      setInterval(banerStart, 2000)

