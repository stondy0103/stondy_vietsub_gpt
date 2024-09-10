import Image from "next/image";

export const metadata = {
    title: 'Đá Vietsub - Phim chất lượng cao',
    description: 'Website Đá Vietsub - Xem phim phụ đề chất lượng cao, cập nhật liên tục.',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: 'https://www.gstatic.com/youtube/img/creator/favicon/favicon.ico',
                href: 'https://www.gstatic.com/youtube/img/creator/favicon/favicon.ico',
            }
        ],
    },
};
export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-10">
                {/* Header section */}
                <header className="text-center bg-gradient-to-r from-blue-500 to-green-500 p-10 rounded-lg shadow-lg">
                    <h1 className="text-6xl font-bold text-white">
                        Chào mừng bạn đến với website của Đá Vietsub
                    </h1>
                    <p className="mt-4 text-2xl text-white">
                        Tham gia youtube của mình để xem nhiều phim hay và ý nghĩa nhé 👇👇👇
                    </p>
                </header>

                {/* Content Section */}
                <main className="mt-10 text-center">
                    <Image
                        src="https://lh3.googleusercontent.com/a/ACg8ocIoSWahIN3FaAiLmeK_8_IQZSXtlxXxAudCS8esxvp71LgIQ58=s288-c-no"
                        alt="Movie Poster"
                        width={600}
                        height={400}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-xl mt-8 text-gray-700">
                        Đá Vietsub mang đến cho bạn những bộ phim hấp dẫn với phụ đề chất lượng cao.
                    </p>

                    {/* Call to action button */}
                    <div className="mt-8">
                        <a
                            href="https://www.youtube.com/@stondyvietsub/?sub_confirmation=1" // Replace this with the actual YouTube link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Xem kênh Youtube của mình
                        </a>
                    </div>
                </main>


                {/* Footer Section */}
                <footer className="mt-20 text-center">
                    <p className="text-gray-600">&copy; 2024 Đá Vietsub. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
}
