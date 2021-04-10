import Head from 'next/head'
import 'normalize.css'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

function Bio() {
  return (
    <div className={styles.bio}>
      <p>
        Barcelona. July, 2018. Everlasting nights. The spires of the gothic
        quarter embracing the first daylight. Soft sounds, distant cheers in the
        hazy, warm light. The scent of clubs. Crossing paths with people from
        every corner of the world. Timeless stories intertwined into an infinite
        dance. Falling in love with these stories, as they now are a part of
        you.
      </p>
      <p>
        Forgotten dances and eclectic sounds echoing through the old town are
        the postcard of these nights.
      </p>
      <p>
        In this setting, two former colleagues find themselves having to share a
        small flat for a couple of months. In this crucial time of their lives,
        they discover a shared and profound passion for electronic music. With
        just a laptop and a midi keyboard in the limited space, they begin a
        creative journey. Violins, piano keys, deep basslines and syncopated
        rhythms merge into an awareness of growth, of solitude, of love lost and
        reencountered. Meet Once Again is born. Music for listening, music for
        dancing, music for celebrating the contrasts of life.
      </p>
    </div>
  )
}

function AlbumDescription() {
  return (
    <div className={styles.albumDescription}>
      <p>
        With a background in classical music education, Meet Once Again is a duo
        that thrives to bring together a multitude of musical influences,
        merging them into a collection of danceable tunes and relatable
        emotional landscapes.
      </p>
      <p>
        Their first release, “Gateway to the Continent”, is a journey through
        different stages of self-exploration, narrated through wordless
        storytelling made of an alchemy of classical, rock and dance floor
        elements. It's a story that opens with delicate tranquility and
        continues to gently ascend into layers of dynamic and energetic
        melodies.
      </p>
    </div>
  )
}

function Nav() {
  const socials = [
    { url: 'mailto:meetonceagain@gmail.com', name: 'Contact' },
    {
      url: '//www.youtube.com/channel/UCXVF82KlzfZeUXi4GLIp74Q',
      name: 'YouTube',
    },
    { url: '//www.instagram.com/meetonceagain/', name: 'Instagram' },
    { url: '//soundcloud.com/meetonceagain', name: 'Soundcloud' },
  ]
  return (
    <div className={styles.nav}>
      <div className={styles.artistName}>Meet Once Again</div>
      <div className={styles.navLinks}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  )
}

function Background() {
  const maxOpacity = 0.8
  const minOpacity = 0
  const fxSpeed = 3
  const [bgOpacity, setBgOpacity] = useState(maxOpacity)
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = (evt) => {
      if (bgRef.current) {
        const scrollOffset = bgRef.current.offsetTop
        const height = document.body.clientHeight
        const normalizedOpacity = Math.max(
          0,
          (height - fxSpeed * scrollOffset) / height
        )
        const opacity = Math.max(minOpacity, normalizedOpacity)
        setBgOpacity(opacity > maxOpacity ? maxOpacity : opacity)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={styles.background}
      ref={bgRef}
      style={{ opacity: bgOpacity }}
    />
  )
}

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Meet Once Again</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <Background />
      <div className={styles.main}>
        <Bio />
      </div>
      <div className={styles.backgroundGTTC} />
      <div className={styles.mainGTTC}>
        <AlbumDescription />
      </div>
    </div>
  )
}
