 import MainLayout from "../../layouts/MainLayout";



const Home = () => {

  return (

    <MainLayout>



      <section className="relative overflow-hidden">



  <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>



  <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>



  <div className="max-w-7xl mx-auto px-6 py-32 text-center">



    <span className="inline-block px-5 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300">



      🚀 Join 10,000+ Active Users



    </span>



    <h1 className="mt-8 text-7xl md:text-8xl font-extrabold leading-tight">



      Connect.

      <br />



      Share.

      <br />



      <span className="text-blue-500">



        Grow Together.



      </span>



    </h1>



    <p className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto">



      ConnectHub helps creators, developers,

      students, and professionals build

      communities, share ideas, and grow

      together.



    </p>



    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">



      <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20 transition">



        Get Started



      </button>



      <button className="border border-slate-700 bg-slate-900/50 hover:bg-slate-800 px-10 py-4 rounded-2xl font-semibold transition">



        Explore Feed



      </button>



    </div>



  </div>



</section>



<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 pb-24 px-6">



  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">



    <h2 className="text-4xl font-bold text-blue-500">

      50K+

    </h2>



    <p className="text-slate-400 mt-2">

      Active Users

    </p>



  </div>



  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">



    <h2 className="text-4xl font-bold text-blue-500">

      100K+

    </h2>



    <p className="text-slate-400 mt-2">

      Posts Shared

    </p>



  </div>



  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">



    <h2 className="text-4xl font-bold text-blue-500">

      24/7

    </h2>



    <p className="text-slate-400 mt-2">

      Community Support

    </p>



  </div>



</div>



    </MainLayout>

  );

};



export default Home;