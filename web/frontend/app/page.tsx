'use client'

import { 
  MutableRefObject,
  useEffect, 
  useRef,
  useState
} from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

import { 
  Menu,
  Clipboard,
  Network,
  CalendarHeart,
  HelpCircle,
  Power,
  MoveDown,
  Hand,
  Settings,
  Waypoints
} from "lucide-react";


import { IconBlock } from "@/components/ui/icon-block";

import Image from "next/image";

import { cn } from "../lib/utils";
import { tenorFont, interFont } from "../lib/fonts";

export default function Home() {

  //const headerRef = useRef() as MutableRefObject<HTMLElement>;
  //const headerLogoRef = useRef() as MutableRefObject<HTMLDivElement>;
  //const headerLogoRedImageRef = useRef() as MutableRefObject<HTMLImageElement>;
  //const headerLogoWhiteImageRef = useRef() as MutableRefObject<HTMLImageElement>;

  const [menuTriggerColor,setMenuTriggerColor] = useState("text-white");

  useEffect(() => {

    const headerRef = document.getElementById("header");
    const headerLogoRef = document.getElementById("header-logo");
    const headerLogoRedImageRef = document.getElementById("header-logo-red");
    const headerLogoWhiteImageRef = document.getElementById("header-logo-white");

    window.onscroll = () => {
      if (window.scrollY > 150) {
        console.log(window.scrollY);
        headerLogoWhiteImageRef?.classList.add('hidden');
        headerLogoRedImageRef?.classList.remove('hidden');

        headerRef?.classList.add('bg-white');
        headerRef?.classList.add('h-[90px]');
        headerRef?.classList.add('md:h-[160px]');

        headerLogoRef?.classList.add('w-[250px]');
        headerLogoRef?.classList.add('md:w-[360px]');

        headerLogoRef?.classList.remove('w-[300px]');
        headerLogoRef?.classList.remove('md:w-[600px]');
        headerLogoRef?.classList.remove('lg:w-[800px]');

        setMenuTriggerColor('text-red-700');
      }
      else {
        headerLogoRedImageRef?.classList.add('hidden');
        headerLogoWhiteImageRef?.classList.remove('hidden');

        headerRef?.classList.remove('bg-white');
        headerRef?.classList.remove('h-[90px]');

        headerLogoRef?.classList.add('w-[300px]');
        headerLogoRef?.classList.add('md:w-[600px]');
        headerLogoRef?.classList.add('lg:w-[800px]');

        headerLogoRef?.classList.remove('w-[250px]');
        headerLogoRef?.classList.remove('md:w-[360px]');

        setMenuTriggerColor('text-white');
      }
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-v-screen ">

      <div className="z-50 fixed top-1 right-1 md:top-2 md:right-8 lg:right-4">
        <Sheet>
          <SheetTrigger>
            <Menu className={menuTriggerColor} strokeWidth={2} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="flex flex-col text-2xl text-left gap-4 pt-10 text-red-700">
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#welcome">
                    <Hand /> 
                    <span>Welcome</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#process">
                    <Clipboard /> 
                    <span>Our Process</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#solutions">
                    <Network /> 
                    <span>Solutions</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#subscriptions">
                    <CalendarHeart /> 
                    <span>Subscriptions</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#faq">
                    <HelpCircle /> 
                    <span>FAQs</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="#get-started">
                    <Power /> 
                    <span>Get Started</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="https://cloudbuild.atlassian.net/">
                    <Waypoints /> 
                    <span>Project Management</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="flex flex-row gap-x-2 items-center" href="https://billing.stripe.com/p/login/dR6cNN6Fb29Bbmg000">
                    <Settings /> 
                    <span>Manage Subscription</span>
                  </a>
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="invisible md:visible flex flex-row md:w-[800px] lg:w-[900px] h-[80px] fixed bottom-[40px] left-[50%] md:mx-[-400px] lg:mx-[-450px] z-10 px-12 py-6 justify-evenly space-x-6 lg:space-x-10 drop-shadow-xl text-xl bg-white rounded-full border-2 border-slate-100 bg-gradient-to-b from-white via-white to-slate-200">
        <a href="#welcome">Welcome</a>
        <a href="#process">Our Process</a>
        <a href="#solutions">Solutions</a>
        <a href="#subscriptions">Subscriptions</a>
        <a href="#faq">FAQs</a>
        <a href="#get-started">Get Started</a>
      </nav>

      <header id="header" className="flex flex-row justify-center fixed top-0 z-30 w-full transition-all duration-300">
        <div id="header-logo" className="w-[300px] md:w-[600px] lg:w-[800px] h-auto my-3 md:my-10 transition-all duration-300">
          <a href="#">
            <Image id="header-logo-white" className="drop-shadow-lg"
              src="/images/cloudbuild-logo-white-transperant.svg"
              alt="Cloud Build Solutions Logo" width="954" height="234" />
            <Image id="header-logo-red" className="hidden drop-shadow-lg"
              src="/images/cloudbuild-logo-red-transperant.svg"
              alt="Cloud Build Solutions Logo" width="954" height="234" />
          </a>
        </div>
      </header>

      <section className="relative overflow-x-clip overscroll-y-none flex flex-col mt-0 space-y-8 md:space-y-16 items-center justify-center w-full h-screen basis-auto">

        <Image className="absolute top-0 left-0 translate-y-[40px] md:translate-y-[0px] lg:translate-y-[-200px] translate-x-[-100px] md:translate-x-[-200px] lg:translate-x-[-500px] w-[3000px] z-0"
          src="/images/real-cloud-5.svg"
          alt="Background Cloud 1" width="165" height="120" />

        <h1 className={cn(tenorFont.className, "w-10/12 text-center text-white text-4xl md:text-5xl lg:text-7xl drop-shadow-xl")}>
          Redefining Cloud Solutions for the Agile Enterprise</h1>
        <h3 className={cn(interFont.className, "w-10/12 text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-md")}>
          Monthly cloud architecture subscriptions for every business. <strong className="font-extrabold">
          Get started for FREE for 30 Days.</strong> Pause or Cancel at anytime.
        </h3>
        <a href="#welcome" className="z-10">
          <MoveDown strokeWidth={2} size={64} className="animate-bounce text-white drop-shadow-md"/>
        </a>

        <Image className="absolute bottom-0 right-0 translate-x-[100px] translate-y-[100px] md:translate-x-[300px] md:translate-y-[200px] w-[1000px] z-0"
          src="/images/real-cloud-1.svg"
          alt="Background Cloud 1" width="165" height="120" />

      </section>

      <section id="welcome" className="h-20"></section> 

      <section className="relative overflow-x-hidden flex flex-col mt-8 md:mt-[-40px] md:space-y-16 lg:space-y-4 items-center justify-center w-full min-h-screen basis-auto">

        {/*
        <Image className="invisible md:visible absolute top-[3rem] md:top-[0rem] lg:top-[-6rem] left-[-6rem] md:left-[-20rem] w-[3000px] z-0"
          src="/images/real-cloud-4.svg"
          alt="Background Cloud 1" width="165" height="120" />
          */}

        <h2 className={cn(tenorFont.className, "w-10/12 text-center text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-md")}>
          We are your cloud native concierge on your serverless cloud journey
        </h2>
        <div className="flex flex-col md:flex-row items-center md:justify-around w-10/12">
          <IconBlock 
            icon="calendar-heart" 
            label="Subscribe to a plan and make as many requests as needed." 
          />
          <IconBlock 
            icon="package-open" 
            label="Receive solutions within 1 to 2 week sprints, from Monday to Friday" 
          />
          <IconBlock 
            icon="list-checks" 
            label="We are with you at every step of the process from design to development" 
          />
        </div>

        {/*
        <Image className="invisible md:visible absolute bottom-[-1rem] right-[0rem] w-[2000px] z-0"
          src="/images/real-cloud-6.svg"
          alt="Background Cloud 1" width="165" height="120" />
          */}

      </section>

      <section className="h-20"></section> 

      <section className="bg-[url('/images/real-cloud-10.svg')] bg-cover bg-center relative flex flex-col space-y-8 lg:space-y-16 justify-center items-center w-full min-h-screen">
        <h2 className={cn(tenorFont.className, "w-10/12 text-center text-white text-4xl lg:text-6xl drop-shadow-md")}>
          This is the kind of architecture upgrade to optimize and elevate your business to new heights
        </h2>
        <h3 className={cn(interFont.className, "w-10/12 text-center text-white text-2xl lg:text-4xl drop-shadow-md")}>
          Cloud Build replaces erratic contractors and pricier consulting firms with a transparent monthly fee.
          <strong className="font-extrabold">There is no risk to get started because you can cancel anytime and will not be charged until after the first 30 days.</strong>
        </h3>
      </section>

      <section id="process" className="h-40"></section> 

      <section className="relative flex flex-col space-y-8 justify-evenly items-center w-full">
        <h2 className={cn(tenorFont.className, "w-10/12 text-center text-white text-4xl lg:text-6xl lg:mt-10 drop-shadow-md")}>
          Our Cloud Native Solution Process
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center w-10/12 p-2 md:p-10 gap-x-32 gap-y-8 md:gap-y-32 border-2 border-red-500 bg-red-700 rounded-xl">
          <IconBlock 
            icon="messages-square" 
            title="Consultation"
            label="We meet to understand your objectives, technical requirements, and desired outcomes." 
          />
          <IconBlock 
            icon="notebook-pen" 
            title="Solution Planning"
            label="We identify the most suitable AWS services and architecture that align with your goals." 
          />
          <IconBlock 
            icon="drafting-compass" 
            title="Architecture Design"
            label="We will create a detailed proposal and technical blueprint of the solution architecture." 
          />
          <IconBlock 
            icon="fingerprint" 
            title="Security Analysis"
            label="We will address security best practices and compliance requirements relevant to you." 
          />
          <IconBlock 
            icon="flask-conical" 
            title="Prototyping"
            label="We develop a prototype of the solution to test the design based on your requirements." 
          />
          <IconBlock 
            icon="settings" 
            title="Setup &amp; Provisioning"
            label="Provision and configure AWS services as per the solution design." 
          />
          <IconBlock 
            icon="braces" 
            title="Development"
            label="Develop custom web or mobile, applications and APIs." 
          />
          <IconBlock 
            icon="git-compare-arrows" 
            title="Testing"
            label="Establish a testing and CI/CD pipeline for deployment and updates." 
          />
          <IconBlock 
            icon="rocket" 
            title="Deployment"
            label="Design a deployment and release plan that minimizes downtime." 
          />
          <IconBlock 
            icon="presentation" 
            title="Training"
            label="We will provide comprehensive training to your team on managing the solution effectively." 
          />
          <IconBlock 
            icon="gauge" 
            title="Optimization"
            label="We will optimize your resource utilization and costs as the system scales." 
          />
          <IconBlock 
            icon="activity-square" 
            title="Monitoring"
            label="Implement monitoring to track performance and costs." 
          />
        </div>
      </section>

      <section id="solutions" className="h-20"></section> 

      <section className="bg-[url('/images/real-cloud-11.svg')] bg-cover bg-center relative flex flex-col md:flex-row gap-y-8 justify-center items-center w-full min-h-screen">
        <div className="flex w-full md:w-10/12 flex-col md:flex-row gap-y-8 justify-center items-center">
          <div className="w-full md:w-6/12 text-white">
            <Image className="drop-shadow-lg"
              src="/images/nodes-to-circle.svg"
              alt="Nodes to Circle Illustration" width="600" height="600" />
          </div>
          <div className="w-full md:w-6/12 space-y-8">
            <h3 className={cn(tenorFont.className, "w-full text-center text-white text-4xl md:text-4xl lg:text-6xl drop-shadow-md")}>
              Types of Solutions We Provide on the AWS Cloud
            </h3>
            <ul className={cn(interFont.className, "w-full text-center text-white text-xl md:text-2xl font-extrabold drop-shadow")}>
              <li>Serverless Applications</li>
              <li>Containerization</li>
              <li>Load Balancing</li>
              <li>Database Design</li>
              <li>Infrastructure as Code</li>
              <li>Data Lake Formation</li>
              <li>CDK and CloudFormation</li>
              <li>CI/CD Workflows</li>
              <li>Data Migration and Backup</li>
              <li>UI and UX Design</li>
              <li>Web and Mobile Design</li>
              <li>Legacy to Cloud Conversions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="subscriptions" className="h-20"></section> 

      <section className="relative flex flex-col space-y-24 align-middle justify-center items-center w-full min-h-screen basis-auto">
        <h2 className={cn(tenorFont.className, "w-8/12 text-center text-white text-4xl lg:text-6xl drop-shadow-md")}>
         Monthly Subscription Levels for Cloud Solutions
        </h2>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-6">

          <Card className="w-72 md:w-60 lg:w-72">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Designer</CardTitle>
              <CardDescription className="text-center text-xl">$4,999/m</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <Button asChild>
                <a href="https://buy.stripe.com/eVa16e8MSepi4pO4gg">Get Started</a>
              </Button> 
              <h4 className="font-extrabold w-full">Services Included:</h4>
              <ul>
                <li>UI/UX Figma Prototyping</li>
                <li>Web and Mobile Design</li>
                <li>HTML/CSS Templating</li>
                <li>A/B User Testing</li>
                <li>Weekly Stand Ups</li>
                <li>Jira Projects</li>
                <li>Single task deliverables</li>
                <li>1 to 2 week sprints</li>
                <li>Easy monthly payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </CardContent>
            <CardFooter className="text-center italic justify-center">
              <p>First 30 days FREE!</p>
            </CardFooter>
          </Card>
          <Card className="w-72 md:w-60 lg:w-72">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Developer</CardTitle>
              <CardDescription className="text-center text-xl">$7,999/m</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <Button asChild>
                <a href="https://buy.stripe.com/3cs02aaV0gxqg8wbIJ">Get Started</a>
              </Button> 
              <h4 className="font-extrabold w-full">Services Included:</h4>
              <ul>
                <li>Serverless Applications</li>
                <li>NoSQL and SQL DB</li>
                <li>React and Next.js</li>
                <li>iOS and Android w/Expo</li>
                <li>Python/Typescript APIs</li>
                <li>CDN Distributions</li>
                <li>CDK and CloudFormation</li>
                <li>Debugging and Testing</li>
                <li>Everything in Designer</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </CardContent>
            <CardFooter className="text-center italic justify-center">
              <p>First 30 days FREE!</p>
            </CardFooter>
          </Card>
          <Card className="w-72 md:w-60 lg:w-72">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Architect</CardTitle>
              <CardDescription className="text-center text-xl">$9,999/m</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <Button asChild>
                <a href="https://buy.stripe.com/00gcOW5AG3KEcWkbIK">Get Started</a>
              </Button> 
              <h4 className="font-extrabold w-full">Services Included:</h4>
              <ul>
                <li>Infrastructure Design</li>
                <li>AWS Account Config</li>
                <li>Cost Optimizations</li>
                <li>Security Analysis</li>
                <li>CI/CD Deployments</li>
                <li>Data Migration</li>
                <li>Disaster Recovery</li>
                <li>Monitoring and Scaling</li>
                <li>Everything in Developer</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </CardContent>
            <CardFooter className="text-center italic justify-center">
              <p>First 30 days FREE!</p>
            </CardFooter>
          </Card>

        </div>
      </section>

      <section id="faq" className="h-40"></section> 

      <section className="relative flex flex-col justify-center items-center md:items-start w-10/12 gap-10 min-h-screen basis-auto">
        <h2 className={cn(tenorFont.className, "w-10/12 md:w-full lg:mt-8 text-center text-white text-3xl lg:text-6xl md:text-4xl drop-shadow-md")}>
         Questions You May Have
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">

          <div className="w-full md:w-6/12 space-y-8 text-white">

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                Why would I not just hire a full-time Solution Architect or Cloud Engineer?
              </h4>
              <p>
                Great question! To begin with, the annual expenses for employing a full-time Solutions Architect or Cloud Enginer now surpass $160,000, inclusive of benefits (and locating one ready for hire can be quite challenging). Moreover, there might be occasions when you lack sufficient tasks to keep them occupied consistently, resulting in paying for unutilized time. With our monthly plan, you have the flexibility to pause and resume your subscription as necessary, ensuring that you only pay your Solutions Architect when there is work to be done.
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                How do I add and manage Tasks
              </h4>
              <p>
                We offer a ton of flexibility in how you request tasks using Jira. Some common ways clients request tasks is directly via Jira, sharing Google docs, or Figma projects, sharing whiteboards, a weekly Zoom meeting, or even recording a brief video (for those who prefer not to write their briefs out). All tasks are organized into 1 to 2 week sprints. You will be able to see the status of each tasks and receive weekly updates during the sprints.  
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                How does the pause feature work?
              </h4>
              <p>
                We understand you may not have enough work to fill up entire month. Perhaps you only have one or two tasks at the moment. That is where pausing your subscription comes in handy. Billing cycles are based on 31 day period. For example, you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you will have 10 days of service remaining to be used anytime in the future.
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                Are there any refunds if I do not like the service?
              </h4>
              <p>
                Due to the professional nature of the work, there will be no refunds issued. However, there is no upfront or charge during the first 30 days of the subscription.  You can cancel before end of the first 30 days and will not be charged. 
              </p>
            </div>

          </div>

          <div className="w-full md:w-6/12 space-y-8 text-white">

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                Is this service really free for 30 days?
              </h4>
              <p>
                Yes, you will not be charged until the end of the first 30 days.  During the first 30 days, if you are not satisfied with the service provided you can cancel before the end of the 30 days and not be charged. You can expect to have multiple tasks and 1 to 2 sprints completed within the first month of service. 

                <strong className="font-extrabold">However, in order for us to start working together, you will need to provide a card for future payment. Your card will not be charged until after 30 days.</strong> 
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                Who are the Solution Architects?
              </h4>
              <p>
                You might be surprised to hear this, but Cloud Build Solutions is actually a consulting firm of one. This means you will work directly with me, founder of Cloud Build LLC. I have over 15 years of experience leading teams to design and develop web applications on a variety of cloud platforms. The design of the User Interface and the User Experience for the end user is as important to me as the technical implementation. I also have a network of designers and engineers we bring into projects from time to time when needed.
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                Is there a limit to how many tasks I can have?
              </h4>
              <p>
                Once subscribed, you are able to add as many tasks to your queue as you would like, and they will be delivered in weekly or bi-weekly sprints one by one.
              </p>
            </div>

            <div className="border-2 border-red-500 bg-red-700 rounded-md p-4 space-y-4">
              <h4 className="text-xl font-extrabold">
                How fast will tasks be completed?
              </h4>
              <p>
                All tasks are assigned to weekly and bi-weekly sprints in Jira. You will receive weekly stand up meetings or updates and each sprint will be completed in an average of 1 to 2 weeks.  
              </p>
            </div>

          </div>
        </div>

      </section>

      <section id="get-started" className="h-20"></section> 

      <section className="bg-[url('/images/real-cloud-11.svg')] bg-cover bg-center relative flex flex-col space-y-16 md:space-y-24 lg:mt-2 justify-center items-center w-full min-h-screen basis-auto">
        <h2 className={cn(tenorFont.className, "w-10/12 md:w-8/12 text-center text-white text-4xl md:text-6xl drop-shadow-md")}>
          See if Cloud Build is right for your enterprise (It totally is)
        </h2>
        <h3 className={cn(interFont.className, "w-10/12 md:w-8/12 text-center text-white text-2xl md:text-3xl drop-shadow-md")}>
          Get a guided tour through the Cloud Build process, and find out how you and your team can change the way you build your cloud infrastructure and applications, forever.
        </h3>
        <Button asChild variant="secondary" className="text-2xl md:text-4xl p-4 md:p-10 text-red-700">
          <a href="https://buy.stripe.com/00gcOW5AG3KEcWkbIK">Get Started Today</a>
        </Button>
      </section>

      <footer className="relative flex flex-col items-center justify-center w-full h-40 text-white">
        <div className="w-8/12 text-center">
        Cloud Build LLC is registered and located in the state of Pennsylvania.
        </div>
        <div className="text-center my-10">
        &copy;2024 Cloud Build LLC
        </div>
      </footer>
    </main>
  );
}
