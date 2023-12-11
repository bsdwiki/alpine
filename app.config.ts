export default defineAppConfig({
  alpine: {
    title: 'BSDWIKI',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        text: 'BSDWIKI', 
/*        path: '/openbsd-alt.svg', // path of the logo
        pathDark: '/openbsd.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        */
        alt: 'bsdwiki' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://www.github.com/bsdwiki/alpine',

        text: ''
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me by below platforms' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',

      Bilibili: {
        icon: 'ri:bilibili-fill',
        label: 'Bilibili',
        href: 'https://space.bilibili.com/1446875790'
      },
      
      Openbsd: {
        icon: 'simple-icons:openbsd',
        label: 'OpenBSD',
        href: 'https://openbsd.org'
      },
      Freebsd: {
        icon: 'mdi:freebsd',
        label: 'FreeBSD',
        href: 'https://freebsd.org'
      },


      github: 'bsdwiki'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
