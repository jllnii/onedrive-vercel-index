/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'jllnii@rzx66.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/128.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: "Jae Cloud",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/Public',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 50,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Fira Sans',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap','https://fonts.googleapis.com/css2?family=Fira+Sans'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    '<script type="text/javascript" src="https://assets.trakteer.id/js/trbtn-overlay.min.js"></script><script type="text/javascript" class="troverlay">(function() {var trbtnId = trbtnOverlay.init("Dukung Saya di Trakteer","#be1e2d","https://trakteer.id/jllnii/tip/embed/modal","https://cdn.trakteer.id/images/embed/trbtn-icon.png?date=18-11-2023","40","inline");trbtnOverlay.draw(trbtnId);})();</script><br><iframe height="40px" width="100%" style="border: none;" src="https://stream.trakteer.id/running-text-default.html?rt_font=Amaranth&rt_count=5&rt_speed=faster&rt_theme=default&rt_1_clr1=rgba%28190%2C+30%2C+45%2C+1%29&rt_1_clr2=rgba%28255%2C+255%2C+255%2C+1%29&rt_1_clr3=rgba%28255%2C+200%2C+73%2C+1%29&rt_3_clr1=rgba%2868%2C+68%2C+68%2C+1%29&rt_3_clr2=rgba%28255%2C+255%2C+255%2C+1%29&rt_3_clr3=rgba%28251%2C+215%2C+88%2C+1%29&rt_septype=bull&rt_messages=Support+El+Gato+Mirror+di+%7Btrlink%7D+dukung+menggunakan+Gopay%2C+OVO%2C+Dana%2C+LinkAja%2C+ShopeePay%2C+QRIS%2C+dan+Transfer+Bank&rt_txtshadow=true&creator_name=elgato&page_url=trakteer.id/jllnii&mod=3&key=trstream-hAgmUepJuopit3OfDfd8&hash=vgxe3x9rxd73ladb"></iframe>',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/Pivate'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: '',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'Telegram',
      link: 'https://telegram.dog/JLLNII',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'MMM YYYY',
}
