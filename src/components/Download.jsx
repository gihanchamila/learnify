
import Section from './Section'
import Heading from './Heading'
import { download } from '../assets/index'
import { GooglePlayButton, AppGalleryButton, AppStoreButton,} from 'react-mobile-app-button'


const Download = () => {

  return (
    <Section id={`download`} className={`pt-[11rem] -mt-[5.25rem]`} customPadding={true}>
      <div className="container relative">
          <Heading className="md:max-w-md  lg:max-w-2xl" title='Start Learning with Learnify' />
        <div className='grid lg:grid-cols-12 sm:grid-cols-1  justify-between'>
            <div className="lg:col-start-1 lg:col-span-6 sm:col-span-12">
              <p className='body-1 pb-10'>Ready to start your journey of self-improvement? Download Learnify now on Google Play or the App Store and begin challenging your mind today!
              </p>
              <p className='body-1 pb-10'>With Learnify, embark on a personalized learning journey tailored to your needs. Test your IQ across various categories like logic, mathematics, and language. Track your progress with detailed analytics. Learnify is available on multiple platforms, allowing learning on the go. Engage with interactive lessons and join a global community to share achievements and collaborate with others.
              </p>
              <p className='body-1 pb-6'>Don't miss out on the opportunity to enhance your knowledge and skills. Download Learnify today and start your learning adventure!</p>
              <div className='my-5 lg:w-full lg:flex lg:flex-row sm:flex-col sm:gap-4   lg:gap-4'>
                    <GooglePlayButton theme={'dark'} className={"custom-style mb-5 hover:cursor-pointer"} height={60}/>
                    <AppGalleryButton theme={'dark'} className={"custom-style mb-5 hover:cursor-pointer"} height={60} />
                    <AppStoreButton theme={'dark'} className={"custom-style mb-5 hover:cursor-pointer"} height={60} />
              </div>
            </div>
            <div className="lg:col-start-8 lg:col sm:pb-5-span-5 sm:col-start-1 sm:col-span-12">
              <img src={download}  width={600} height={600} className='rounded-3xl'/>
            </div>
        </div>
      </div>
    </Section>
  )
}

export default Download