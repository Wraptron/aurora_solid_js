import { createSignal } from "solid-js";
import { A, Title } from "solid-start";


export default function Home() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [remember, setChecked] = createSignal(false);
  const [formData, setFormData] = createSignal({email: '' ,password:'',checked:''});
  const [isChecked, setIsChecked] = createSignal(false);

  const handleEmailChange = (event: { target: { value: any } }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: any } }) => {
    setPassword(event.target.value);
  };
  const handleCheckboxChange = (event:any) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
   
  

  
    try {
      const url = 'http://localhost:5000/user/login/'; 
   
      const data_array = { email: formData().email, password: formData().password,isChecked:isChecked() };
      console.log(data_array)
      const data = await postData(url, data_array);
    
       if(data.status==200){
       console.log(data)

      window.location.href = 'http://localhost:4200/dashboard/'+data.message;
     // window.location.href='https://stackoverflow.com/questions/66361923/window-location-href-is-not-redirecting-html-page'
       

       }
      
    } catch (error) {
      console.error('Error:', error);
    }
};
  async function postData(url:any, data:any) {
   
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  return (
    <main>
      <Title>Auth | Wraptron</Title>
      <div class="bg-white dark:bg-black">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
            Wraptron
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData().email} onInput={(e) => setFormData({ ...formData(), email: e.target.value })}
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData().password} onInput={(e) => setFormData({ ...formData(), password: e.target.value })}
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                      
                      
                     
                      checked={isChecked()} onchange={handleCheckboxChange}
                        id="isChecked"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                   
                  </div>
                  <A
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </A>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <A
                    href="signup"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </A>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
