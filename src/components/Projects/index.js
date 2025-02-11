import ProjectContent from '../ProjectContent';

import mastermind from './mastermind';
import branch_predictor from './branch_predictor';
import astorino from './astorino';
import warsztat from './warsztat';

/**
 * @type {[name: string, project: ProjectContent][]}
 */
const Projects = [
    ['branch_predictor', branch_predictor], 
    ['mastermind', mastermind],
    ['astorino', astorino],
    ['warsztat', warsztat],
]


export default Projects;