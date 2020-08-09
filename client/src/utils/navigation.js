const getNavigation = (loggedIn, user) => {

   const authLinks = [
      {
         title: "Home",
         link: "/"
      },
      {
         title: "About",
         link: "/about"
      },
      {
         title: "Menu",
         link: "/menu"
      },
      {
         title: "Reservation",
         link: "/reservation"
      },
      {
         title: "Reviews",
         link: "/reviews"
      },
      {
         title: "Profile",
         link: `/profile/${user && user.id}`
       }
   ]

   const guestLinks = [
      {
         title: "Home",
         link: "/"
      },
      {
         title: "About",
         link: "/about"
      },
      {
         title: "Menu",
         link: "/menu"
      },
      {
         title: "Reservation",
         link: "/reservation"
      },
      {
         title: "Reviews",
         link: "/reviews"
      },
      {
         title: "Login",
         link: "/login"
      },
      {
         title: "Register",
         link: "/register"
      }
   ]

   return loggedIn ? authLinks : guestLinks
}

export default getNavigation