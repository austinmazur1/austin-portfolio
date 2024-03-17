import AuctionEraSignUp from "@/public/images/auction-era-screenshots/Screenshot 2024-02-06 at 11.07.54 AM.png";
import AuctionEraBidScreen from "@/public/images/auction-era-screenshots/Screenshot 2024-02-06 at 2.46.39 PM.png";
import AuctionEraBuyerDash from "@/public/images/auction-era-screenshots/AuctionEraBuyerDashboard.png";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="lg:h-screen w-full mx-10 my-32 flex flex-col items-center justify-between">
        <p className="lg:text-4xl w-3/4 text-left">Auction Era</p>
        <div className="w-3/4 pt-4 pb-32">
          <p className="text-xl w-2/3">
            An auction website built with React. This project was built by me
            and two other developers utilizing React, MongoDB and Tailwind.
            Creating a real-time, engaging experience was the bulk of the
            challenge.
          </p>
        </div>
        <div className="lg:w-3/4 w-full">
          <Image
            style={{ borderRadius: 6 }}
            src={AuctionEraSignUp}
            className="object-cover"
            alt="project-screenshot"
          />
        </div>
        <div className="w-3/4 py-32 flex flex-col items-end">
          <p className="text-2xl pb-4 text-left">Mission & Goal</p>
          <p className="text-xl w-2/3 text-left">
            My team wanted to look for some alternatives to the average
            e-commerce. After some brainstorming we all agreed on creating an
            auctioning platform. We opted for having two types of user accounts.
            A buyer and a seller. As the name imply, a user creates an account
            and logs in to handle one thing, uploading their item with a photo,
            description, price and a time frame. Buyers then on their home
            screen see all the active auctions and can navigate to the page to
            place their bid.
          </p>
        </div>
        <div className="lg:w-3/4 w-full">
          <Image
            style={{ borderRadius: 6 }}
            src={AuctionEraBuyerDash}
            className="object-cover"
            alt="project-screenshot"
          />
        </div>
        <div className="w-3/4 py-32">
          <p className="text-2xl pb-4">Problems</p>
          <p className="text-xl w-2/3">
            One of the bigger issues we faced was managing all of the timers for
            each product. At a glance everything was working as expected. After
            taking a look in the console we quickly realized we had timers going
            on infinitely. We made sure to properly handle our cleanup functions
            inside our effects to properly stop the timers once it reached its
            target.
          </p>
        </div>
        <div className="lg:w-3/4 w-full">
          <Image
            style={{ borderRadius: 6 }}
            src={AuctionEraBidScreen}
            className="object-cover"
            alt="project-screenshot"
          />
        </div>
        <div className="w-3/4 py-32 flex flex-col items-center">
          <p className="text-2xl pb-4">Biggest Takeaways</p>
          <p className="text-xl w-2/3">
            This project really shined a light on the subtle nuances that React
            has, and gave me more motivation to dive deeper and learn why the
            library works the way it does. Even though having worked with a team
            prior to this project, the experiences with Git and overall code
            management provided new knowledge and methods to my attention.
          </p>
        </div>
      </div>
    </>
  );
}
