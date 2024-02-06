import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next';
import { cookies } from 'next/headers';
const Home = async () => {
  // It's not possible to update the cookie in RSC
  //  setCookie("test", "value", { cookies });
  //  deleteCookie('test1', { cookies });
  // cookies().set('name', 'value', { maxAge: 0 })
// console.log(cook)
  return (
    <main>
      <h1>Hello cookies next</h1>
    </main>
  );
};

export default Home;