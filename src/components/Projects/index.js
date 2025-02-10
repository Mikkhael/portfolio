import ProjectContent from '../ProjectContent';

import mastermind from './mastermind';
import branch_predictor from './branch_predictor';
import astorino from './astorino';

/**
 * @type {[name: string, project: ProjectContent][]}
 */
const Projects = [
    ['branch_predictor', branch_predictor], 
    ['mastermind', mastermind],
    ['astorino', astorino],
]


export default Projects;