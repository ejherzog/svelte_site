import { projects } from '../content/projects.json';
import { reviews } from '../content/reviews.json';

export function load() {
    return {
        projects, reviews
    };
}