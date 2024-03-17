export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="lg:h-screen flex flex-col m-10 items-center justify-between">
          <p className="lg:text-3xl w-auto">{params.slug}</p>
        <div className="w-2/3">
          <p>
            An auction website built with React. This project was built by me
            and two other developers utilizing React, MongoDB and Tailwind.
            Creating a real-time, engaging experience was the bulk of the
            challenge.
          </p>
        </div>
        <div className="w-2/3">
          <p>Mission & Goal</p>
          <p>
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
        <div className="w-2/3">
          <p>Problems</p>
          <p>
            One of the bigger issues we faced was managing all of the timers for
            each product. At a glance everything was working as expected. After
            taking a look in the console we quickly realized we had timers going
            on infinitely. We made sure to properly handle our cleanup functions
            inside our effects to properly stop the timers once it reached its
            target.
          </p>
        </div>
        <div className="w-2/3">
          <p>Biggest Takeaways</p>
          <p>
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
