import mobileImage from '/image-product-mobile.jpg';
import desktopImage from '/image-product-desktop.jpg';
import cart from '/icon-cart.svg';
function App() {
  return (
    <main className="flex w-screen min-h-screen bg-Cream justify-center items-center">
      <article className="max-w-[375px] xl:max-w-[650px] xl:max-h-[450px] flex flex-col xl:flex-row xl:rounded-r-lg bg-white rounded-t-lg">
        <div className="flex-1">
          <img
            src={mobileImage}
            alt="mobile image"
            className="w-full rounded-t-lg xl:hidden h-full"
          />
          <img
            src={desktopImage}
            alt="desktop image"
            className="rounded-l-lg hidden xl:block w-full h-full"
          ></img>
        </div>
        <div className="flex-1">
          <section className="flex flex-col justify-around gap-1 xl:gap-3 p-8">
            <p className="text-sm text-DarkGrayishBlue font-Montserrat">
              P E R F U M E
            </p>
            <p className="font-Fraunces text-2xl mt-3">
              Gabrielle Essence Eau De Parfum
            </p>
            <p className="text-sm mt-3 text-DarkGrayishBlue">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <span className="flex">
              <p className="font-Fraunces text-DarkCyan text-2xl font-bold mt-3">
                $149.99
              </p>
              <p className="mt-4 pl-4 text-sm line-through">$169.99</p>
            </span>
            <button className="bg-DarkCyan flex mt-5 justify-center items-center text-sm font-bold h-[40px] w-[275px] text-white rounded-lg shadow-md hover:bg-VeryDarkBlue ">
              <img src={cart} alt="cart image" />
              <p className="ml-2">Add to Cart</p>
            </button>
          </section>
        </div>
      </article>
    </main>
  );
}

export default App;
