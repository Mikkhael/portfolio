import ProjectContent from '../ProjectContent';
import mastermind from './mastermind';
import branch_predictor from './branch_predictor';

/**
 * @type {[name: string, project: ProjectContent][]}
 */
const Projects = [
    ['branch_predictor', branch_predictor],
    ['mastermind', mastermind],
]


export default Projects;