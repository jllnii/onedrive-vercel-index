import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between px-4 sm:px-0 sm:pl-1">
            <Breadcrumb />
            <SwitchLayout />
          </nav>
          <FileListing />
          <script type='text/javascript' src='https://assets.trakteer.id/js/trbtn-overlay.min.js'></script><script type='text/javascript' class='troverlay'>(function() {var trbtnId = trbtnOverlay.init('Dukung Saya di Trakteer','#be1e2d','https://trakteer.id/jllnii/tip/embed/modal','https://cdn.trakteer.id/images/embed/trbtn-icon.png?date=18-11-2023','40','inline');trbtnOverlay.draw(trbtnId);})();</script>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
