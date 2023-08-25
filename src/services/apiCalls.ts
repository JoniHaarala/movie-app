import axiosClient from "./apiconfig";

interface Category {
    movie: string,
    tv: string
}
interface Movietype {
    upcoming: string,
    popular: string,
    top_rated: string
}
interface Tvtype {
    popular: string,
    top_rated: string,
    on_the_air: string
}

export const category: Category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType: Movietype = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType: Tvtype = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (params: any) => {
        const url = 'movie/' + movieType.upcoming;
        return axiosClient.get(url, params);
    },
    getTvList: (params: any) => {
        const url = 'tv/' + tvType.popular;
        return axiosClient.get(url, params);
    },
    getVideos: (id: number) => {
        const url = category.movie + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
    search: (params: any) => {
        const url = 'search/' + category.movie;
        return axiosClient.get(url, params);
    },
    detail: (id: number, params: any) => {
        const url = category.movie + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (id: number) => {
        const url = category.movie + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (id: number) => {
        const url = category.movie + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;