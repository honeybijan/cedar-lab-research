// To add a project: create a new .json file in this folder and add an import + entry below.
// paperTitles must match paper titles exactly as they appear in the Papers data files.
import HeterogeneityDetection from './heterogeneity_detection.json';
import CausalMasking from './causal_masking.json';
import OptimalInterventions from './optimal_interventions.json';
import SignalDisentanglement from './signal_disentanglement.json';
import ProtectingInformation from './protecting_information.json';

export const PROJECTS = [
  HeterogeneityDetection,
  CausalMasking,
  OptimalInterventions,
  SignalDisentanglement,
  ProtectingInformation,
];