export const MOVIES_API = {
    listMovies: async () => {
        const res = await fetch("/api/movies");
        const json = res.json();

        return json;
    }
};
