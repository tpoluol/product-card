import mobileImage from './assets/image-product-mobile.jpg';
import cart from './assets/icon-cart.svg';
function App() {
  return (
    <main className="flex h-[100vh] justify-center items-center bg-Cream">
      <article className="flex-col justify-center items-center bg-white w-[300px] rounded-t-lg">
        <img
          src={mobileImage}
          alt="mobile image"
          className="w-full rounded-t-lg"
        />
        <section className="p-3 justify-center">
          <p className="text-sm text-DarkGrayishBlue">P E R F U M E</p>
          <p className="font-Fraunces text-2xl mt-3">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="text-sm mt-3 text-DarkGrayishBlue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex">
            <p className="font-Fraunces text-DarkCyan text-2xl font-bold mt-3">
              $149.99
            </p>
            <p className="mt-4 pl-4 text-sm line-through">$169.99</p>
          </div>
          <button className="bg-DarkCyan flex mt-5 justify-center items-center text-sm font-bold h-[40px] w-[275px] text-white rounded-lg shadow-md ">
            <img src={cart} alt="cart image" />
            <p className="ml-2">Add to Cart</p>
          </button>
        </section>
      </article>
    </main>
  );
}

export default App;
