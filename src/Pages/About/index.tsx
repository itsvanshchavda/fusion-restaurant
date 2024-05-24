const About = () => {
  return (
  <div>
    <section className="">
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                <h2
                    className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    all the features
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                   Restaurant Management + Admin Support
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                   Streamline your restaurant operations with our comprehensive order management, payment gateway, and admin panel support.
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Online Ordering System</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Accept orders online seamlessly with our integrated system, ensuring accuracy and efficiency.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Table Reservation</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Allow customers to reserve tables online, reducing wait times and improving customer satisfaction.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Inventory Management</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Keep track of your stock levels in real-time, minimizing waste and ensuring fresh supplies.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Comprehensive Analytics</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Gain insights into your sales, customer preferences, and operational efficiency with our powerful analytics dashboard.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
  </div>
  );
}

export default About;
