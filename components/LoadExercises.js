import { useEffect } from 'react';

/**
 * a custom hook for using embeded scripts. I found it on stackoverflow.
 */
const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
}

/**
 * You need to put one of these at the top of your doc if you want the exercises to work.
 */
const LoadExercises = () => {
    useScript("https://cdn.datacamp.com/dcl-react-dev.js.gz")
    return ""
}

export default LoadExercises;
