// @ts-nocheck
import { FC } from "react";
import { BASE_URL } from "../utils";
import useSWR, { Fetcher } from "swr";
import { Loader, PageNotFound } from "../components";

const fetcher = (...args: Fetcher[]) =>
	fetch(...args).then((response) => response.json());

const RandomAnime: FC = () => {
	const { data, isLoading, error } = useSWR(BASE_URL, fetcher, {
		suspense: true,
	});

	const randomAnime = data.data;
	console.log(randomAnime);

	if (isLoading) return <Loader />;
	if (error) return <PageNotFound />;

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5">
				{randomAnime.map((anime) => {
					return (
						<div
							key={anime.mal_id}
							className="flex flex-col items-center group h-[374px] overflow-hidden"
						>
							<div className="overflow-hidden rounded-xl grid relative">
								<img
									src={anime.images.webp.large_image_url}
									className="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300"
									alt=""
								/>
							</div>
							<h6 className="anime_title">{anime.title}</h6>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default RandomAnime;

// function useSWR(FETCH_RANDOM_ANIME: any, fetcher: (...args: Fetcher[]) => Promise<any>, arg2: { suspense: boolean; }): { data: any; isLoading: any; error: any; } {
//   throw new Error("Function not implemented.");
// }

{
	/* <span className="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-[1.2rem] text-gray-300">
									Episode 1018
								</span> */
}
