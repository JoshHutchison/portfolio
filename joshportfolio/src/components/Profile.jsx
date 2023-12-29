import profilePic from "../assets/profilepic.jpg"

const Profile = () => {
  return (
    <section id='home' className="relative flex items-center w-full bg-black">
                <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 sm:px-16 max-w-7xl">
                  <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-24">
                      <div className="relative items-center gap-12 m-auto sm:inline-flex">
                        <div className="max-w-xl text-center sm:text-left">
                          <div>
                           
                            <p className="text-xl font-medium tracking-tight text-white sm:text-6xl">
                            Crafting exceptional solutions through code mastery
                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            Explore Josh Hutchison's innovative software solutions, enhancing your business efficiency with top-tier developer expertise
                            </p>
                          </div>
                          
                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square sm:mt-0 sm:order-first">
                        <img className="object-cover object-center w-full mx-auto bg-gray-300 sm:ml-auto" alt="hero" src={profilePic} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  )
}

export default Profile