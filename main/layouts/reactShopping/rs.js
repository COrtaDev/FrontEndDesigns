const { useState  } = React

const sizes = [6, 6.5, 7, 7.5, 8, 9, 9.5, 10];
const data = [
  {
    key: 1,
    title: 'Asics',
    image:
      'https://assets.codepen.io/t-1/maksim-larin-jZyacqaR4iI-unsplash.jpg',
    alt: 'a pair of blue and red ASICS sneakers',
    copyright: 'Maksim Larin',
    price: '$65 USD',
    description:
      'Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.',
    freeShipping: true,
    colors: [
      { background: '#1DB0FE', name: 'blue' },
      { background: '#EB3428', name: 'red' },
      { background: '#222', name: 'black' },
    ],
    quantitiyAvailable: 5,
    availableSizes: [6, 6.5, 7.5, 8, 9, 10],
  },
  {
    key: 2,
    title: 'Adidas',
    image:
      'https://assets.codepen.io/t-1/daniel-storek-JM-qKEd1GMI-unsplash.jpg',
    alt: 'a pair of white Adidas sneakers with red and blue trim',
    copyright: 'Daniel Storek',
    price: '$30 USD',
    description: `Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek.`,
    colors: [
      {
        background:
          'linear-gradient(135deg, #A1B986 0%, #95AB7C 49%, #32352F 51%, #000 100%)',
        name: 'olive & black',
      },
      {
        background:
          'linear-gradient(135deg, #1DB0FE 0%, #1DB0FE 49%, #32352F 51%, #000 100%)',
        name: 'blue & black',
      },
      {
        background:
          'linear-gradient(135deg, #f55a94 0%, #f55a94 49%, #32352F 51%, #000 100%)',
        name: 'pink & black',
      },
    ],
    quantitiyAvailable: 5,
    availableSizes: [6, 7, 7.5, 8, 9],
  },
  {
    key: 3,
    title: 'New Balance',
    image:
      'https://assets.codepen.io/t-1/felipepelaquim-6zO5VKogoZE-unsplash.jpg',
    alt: 'a New Balance sneaker in olive drab with a black logo',
    copyright: 'felipepelaquim',
    price: '$45 USD',
    description: `Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.`,
    colors: [
      {
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 15%, #7079C8 30%, #FFFFFF 45%, #FFFFFF 55%, #BC3F3F 70%, #FFFFFF 85%, #FFFFFF 100%)',
        name: 'white with red and blue trim',
      },
      {
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 35%, #000 50%, #FFFFFF 65%, #FFFFFF 100%)',
        name: 'white with black trim',
      },
    ],
    quantitiyAvailable: 1,
    availableSizes: [6],
    oneLeft: true,
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-4">
        <Description />
      </div>
      <div className="container mx-auto ">
        <div className="flex mt-10 flex-wrap  pb-5 ">
          {data.map((shoeDetails) => (
            <Item {...shoeDetails} key={shoeDetails.key} />
          ))}
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="py-3 w-full">
      <div className="container mx-auto px-4 flex items-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="37" r="35.5" stroke="#8B7474" strokeWidth="3" />
          <path
            d="M26.1147 39.9659L27.9076 38.8943L23.6213 31.723L21.8285 32.7946C19.848 33.9783 19.2022 36.5429 20.3859 38.5234C21.5697 40.5039 24.1342 41.1497 26.1147 39.9659ZM23.9303 60.738C25.114 62.7185 27.6785 63.3642 29.6591 62.1805L31.4519 61.1089L27.1656 53.9376L25.3728 55.0092C23.3923 56.1929 22.7465 58.7574 23.9303 60.738ZM38.5505 42.2663C36.5947 43.4353 34.7229 45.5517 33.7545 47.5662C32.9141 49.314 32.3318 50.8498 28.9585 52.866L33.2447 60.0374L37.0027 59.0056C38.7149 58.5358 40.412 57.9656 42.0061 57.1595C43.9149 56.1943 45.7038 55.0003 47.2655 53.5446C52.6116 48.5607 53.0583 44.3336 51.544 41.8001C49.4009 38.2144 43.613 39.2405 38.5505 42.2663ZM37.773 21.3781C35.7512 22.0641 33.8521 23.0737 32.0983 24.2983C30.6335 25.3206 29.3275 26.5453 28.1025 27.8302L25.4141 30.6515L29.7004 37.8228C33.0732 35.8069 34.7022 36.021 36.6396 36.1086C38.8725 36.2096 41.6229 35.5634 43.5787 34.3944C48.6412 31.3685 52.2859 26.7568 50.1428 23.1712C48.6286 20.6377 44.694 19.0292 37.773 21.3781Z"
            fill="#AAA28C"
          />
        </svg>

        <h1 className="ml-4 font-extrabold text-3xl logo-text">LikeNuShus</h1>
      </div>
    </header>
  );
}

function Description() {
  return (
    <div className="flex flex-col text-center w-full mb-20 mt-14">
      <h2 className="text-xs tracking-widest font-medium title-font mb-1 italic tagline">
        Lightly Used Shoes, Cheap!
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-bold">
        Clearance Items
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base category-description">
        Gently used floor model sneakers and discontinued styles at our lowest
        prices of the year. Get 'em before they're gone!
      </p>
    </div>
  );
}

function Item({
  title,
  image,
  alt,
  price,
  description,
  colors,
  quantitiyAvailable,
  availableSizes,
  freeShipping,
  oneLeft,
}) {
  return (
    <div className=" w-full lg:w-1/3 mt-3 px-4">
      <div className="h-full item  p-4  rounded-lg shadow-lg flex-col flex  ">
        <div className="flex-grow">
          <div className="relative">
            {freeShipping && (
              <div className="tag-free-shipping absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0">
                Free Shipping!
              </div>
            )}
            {oneLeft && (
              <div className="tag-one-left absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0">
                Just One Left!
              </div>
            )}
            <img src={image} alt={alt} className="rounded-lg w-full" />
          </div>
          <div className="flex items-center justify-between my-3">
            <h3 className="text-2xl uppercase font-semibold">{title}</h3>
            <p className="price text-2xl font-semibold italic">{price}</p>
          </div>
          <p className="description text-sm my-4">{description}</p>
        </div>

        <Color colors={colors} />
        <Size availableSizes={availableSizes} />
        <Quantity quantitiyAvailable={quantitiyAvailable} />

        <button
          type="button"
          className="add-to-cart-button py-3 text-lg font-bold mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Color({ colors }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="mt-4 mb-2 font-bold">Color</div>
      <div className="flex">
        {colors.map(({ name, background }, index) => (
          <div
            className="flex items-center justify-center mr-2 cursor-pointer"
            style={{ width: '36px', height: '36px' }}
            onClick={() => {
              setSelected(index);
            }}
            key={name}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: '34px',
                height: '34px',
                background: index === selected ? background : '#2a2f33',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: '30px', height: '30px', background: '#2a2f33' }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: '24px',
                    height: '24px',
                    background,
                  }}
                >
                  {index === selected ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1783 31.8684C15.8667 32.1817 15.4417 32.3567 15 32.3567C14.5583 32.3567 14.1333 32.1817 13.8217 31.8684L4.41167 22.4567C3.435 21.48 3.435 19.8967 4.41167 18.9217L5.59 17.7434C6.56667 16.7667 8.14834 16.7667 9.125 17.7434L15 23.6184L30.875 7.74336C31.8517 6.7667 33.435 6.7667 34.41 7.74336L35.5883 8.9217C36.565 9.89836 36.565 11.4817 35.5883 12.4567L16.1783 31.8684Z"
                        fill="#fff"
                      />
                    </svg>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 italic description">{colors[selected].name}</div>
    </>
  );
}

function Size({ availableSizes }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="">
      <div className="mt-4 mb-2 font-bold">Size</div>
      <div className="flex flex-wrap space-x-2">
        {sizes.map((i, index) => (
          <div
            className={`flex justify-center items-center rounded-md ${
              availableSizes.includes(i)
                ? 'cursor-pointer'
                : 'cursor-not-allowed'
            }`}
            key={i}
            style={{
              background:
                index === selected
                  ? 'linear-gradient(180deg, #A67C7C 0%, #D8A76E 100%)'
                  : '#2a2f33',
              width: '30px',
              height: '30px',
            }}
            onClick={() => {
              if (availableSizes.includes(i)) {
                setSelected(index);
              }
            }}
          >
            <div
              className="flex justify-center items-center rounded-md"
              style={{
                width: '28px',
                height: '28px',
                background: '#2a2f33',
                color: availableSizes.includes(i) ? '#fff' : '#424343',
              }}
            >
              {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quantity({ quantitiyAvailable }) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mt-4 mb-2 font-bold">Quantitiy</div>
      <svg
        width="280"
        height="45"
        viewBox="0 0 500 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="shoeContainer">
          {Array(quantitiyAvailable)
            .fill(0)
            .map((i, index) => (
              <g
                id="shoe"
                transform={`translate(${index * 100},0)`}
                onClick={() => {
                  if (selected === index && index !== 0) {
                    setSelected(index - 1);
                  } else {
                    setSelected(index);
                  }
                }}
                key={index} // Array is not dynamic
                className="cursor-pointer"
              >
                <rect x="0" y="0" width="100" height="45" fill="#2a2f33" />
                <path
                  id="Vector"
                  d="M1.94189 39.1943C3.42708 42.1868 6.514 44.2497 10.0752 44.2497H75.3004C78.8616 44.2497 81.9487 42.187 83.4337 39.1943H1.94189Z"
                  fill={selected >= index ? '#5067A5' : '#383E44'}
                />
                <path
                  id="Vector_2"
                  d="M75.3005 26.0993H74.2101C69.3607 26.0993 64.6274 24.5304 60.742 21.6598L54.6768 27.7251L51.2223 24.2707L56.9438 18.5491L54.0884 16.1727L47.7786 22.4824L44.3242 19.028L50.3177 13.0345L47.4621 10.6579L40.8804 17.2396L37.4259 13.7852L43.6916 7.51953L38.1432 2.90169C37.4447 2.32015 36.5592 2 35.6502 2C33.5015 2 31.7534 3.74805 31.7534 5.89681V8.01839C31.7534 15.0132 26.0627 20.7039 19.0679 20.7039C14.1582 20.7039 9.64518 17.8286 7.57048 13.3787L6.97331 12.0981C6.46078 10.9989 5.34603 10.2884 4.13314 10.2884C2.4056 10.2884 1 11.694 1 13.422V34.3091H84.3333C83.8962 29.7096 80.0125 26.0993 75.3005 26.0993Z"
                  fill={selected >= index ? '#5067A5' : '#383E44'}
                />
              </g>
            ))}
        </g>
      </svg>
    </>
  );
}
ReactDOM.render(<App />,
document.getElementById("root"))
