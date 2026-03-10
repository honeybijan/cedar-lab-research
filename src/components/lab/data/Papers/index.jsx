import SyntheticPotentialOutcomes from './publications/synthetic_potential_outcomes.json';
import OmittedLabels from './publications/omitted_labels.json';
import IdentificationMixtures from './publications/identification_mixtures.json';
import CausalInformationSplitting from './publications/causal_information_splitting.json';
import CausalInferenceConfounding from './publications/causal_inference_confounding.json';
import Glioblastoma from './publications/glioblastoma.json';
import ExpertGraphs from './publications/expert_graphs.json';
import SourceIdentification from './publications/source_identification.json';
import RobustCorrection from './publications/robust_correction.json';

import EstimatingAleatoric from './preprints/estimating_aleatoric.json';
import MaskingUnfairness from './preprints/masking_unfairness.json';
import DataAugmentation from './preprints/data_augmentation.json';
import RelaxingFaithfulness from './preprints/relaxing_faithfulness.json';
import MetaDependence from './preprints/meta_dependence.json';
import CausalDiscoveryLatent from './preprints/causal_discovery_latent.json';
import SparseHausdorff from './preprints/sparse_hausdorff.json';
import CancerClassification from './preprints/cancer_classification.json';
import ShortTandemRepeats from './preprints/short_tandem_repeats.json';

export const PUBLICATIONS = [
  SyntheticPotentialOutcomes,
  OmittedLabels,
  IdentificationMixtures,
  CausalInformationSplitting,
  CausalInferenceConfounding,
  Glioblastoma,
  ExpertGraphs,
  SourceIdentification,
  RobustCorrection,
];

export const PREPRINTS = [
  EstimatingAleatoric,
  MaskingUnfairness,
  DataAugmentation,
  RelaxingFaithfulness,
  MetaDependence,
  CausalDiscoveryLatent,
  SparseHausdorff,
  CancerClassification,
  ShortTandemRepeats,
];

export const ALL_PAPERS = [...PUBLICATIONS, ...PREPRINTS];