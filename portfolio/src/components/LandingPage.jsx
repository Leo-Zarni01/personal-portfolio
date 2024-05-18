import profile from '../assets/images/leo_avatar.png';
function LandingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>
          <h1 class="animate__animated animate__zoomIn text-white text-3xl font-mantinia">
            Greetings Traveler from beyond the fog
          </h1>
        </div>
        <div>
          <img
            className="animate__animated animate__fadeInRight animate__delay-1s rounded-full size-32"
            src={profile}
            alt="profile"
          />
        </div>
        <div>
          <h1 class="animate__animated animate__fadeInUp animate__delay-2s text-slightly-desaturated-magenta text-3xl py-3 uppercase font-montserrat">
            Leo Zarni
          </h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
