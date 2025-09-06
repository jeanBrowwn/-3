// This is a mock AI service to simulate the conversational flow.
// In a real application, this would interact with the Gemini API.
import { TranslationKey } from '../i18n/I18nContext';

const mockData = {
    PROJECT_ADDRESS: "Nonhyeon-ro 128-gil 23, Gangnam-gu, Seoul",
    DISTRICT_NAME: "Gangnam-gu",
    DISTRICT_TYPE: "Commercial/Residential Complex",
    EXISTING_BUILDING_DESC: "3-story red brick building",
    NEW_ARCHITECTURE_STYLE: "Modern modular architecture",
};

const getStep1Response = () => `
# Step 1: Target Image Analysis & 4-Part Decomposition Complete

## Execution Overview
**Location**: ${mockData.PROJECT_ADDRESS} (${mockData.DISTRICT_NAME} ${mockData.DISTRICT_TYPE})
**Target**: Replace ${mockData.EXISTING_BUILDING_DESC} with ${mockData.NEW_ARCHITECTURE_STYLE}
**AI Technology**: SM(F) 8 integrated technologies applied

---

## Part 1: Original Image Analysis Results
*Keyword: Original_Image_Complete_Analysis*

- **Image Preprocessing**: 518x518 normalization complete.
- **DINOv2 Feature Extraction**: Global features captured with 95% accuracy.
- **3D VAE Structure Prediction**: Building height estimated at 12m.
- **Compositional Space Decomposition**: Image decomposed into 12 semantic parts.

---

## Part 2: 4-Part Precision Decomposition Results
*Keyword: Four_Parts_Precision_Decomposition*

- **Part 1: Environment Preservation Area (100% preservation)**
  - Structures: Sidewalks, streetlights, surrounding buildings A & B.
  - Area: 65% of the total image.
- **Part 2: Existing Building Removal Area (95% accuracy)**
  - Main Body: ${mockData.EXISTING_BUILDING_DESC}
  - Area: 18% of the total image.
- **Part 3: Environmental Context Analysis**
  - Lighting: Natural daylight from top-left, soft shadows.
  - Season/Weather: Clear autumn day.
- **Part 4: Synthesis Parameters**
  - Camera: Estimated 24mm lens, eye-level perspective.
  - Quality Threshold: Maintain >95% synthesis quality.

---

## Ready for Next Step
**Analysis Quality**: SM(F) analysis achieved 95% accuracy.
**Next Step**: Ready to proceed with Step 2: Existing Building Extraction.

**Is the analysis of the 'Part 2: Existing Building Removal Area' correct? Shall we proceed to Step 2?**
`;

const getStep3Response = () => `
# Step 3: New Building Style Analysis & Environmental Adaptability Complete

## Execution Overview
**Target Style**: ${mockData.NEW_ARCHITECTURE_STYLE}
**Analysis Tech**: ASNE 3-stage pipeline (93% accuracy)
**Environment**: ${mockData.PROJECT_ADDRESS} Context

---

## Part 1: ASNE Pipeline Results
*Keyword: ASNE_Pipeline_Style_Normalization*

- **StyleClassifier**: Classified as 'Modern Modular' (93.7% accuracy).
- **VectorNormalizer (128-dim)**:
  - Geometric Characteristics: 8.2/10
  - Material Properties: 7.5/10 (Emphasis on glass and steel)
- **OntologyMatcher**: Core concept identified as "Sustainable urban living".

---

## Part 2: Environmental Adaptability & Gap Detection
*Keyword: Environmental_Adaptation_Gap_Detection*

- **Scale Harmony**: Proposed height (15m) is compatible with surrounding buildings (10-20m). Score: 92/100.
- **Material Compatibility**: Proposed glass/steel palette offers a modern contrast to the existing brick/concrete. Score: 85/100.
- **Gap Detection**:
  - **Visual Noise Gap**: Risk of excessive reflections from large glass surfaces.
  - **Mitigation Strategy**: Suggest using non-reflective glass or adding facade elements.

---

## Ready for Next Step
**Style Definition**: Style fully decomposed with 93% accuracy.
**Environmental Fit**: Overall adaptability score of 88/100.
**Next Step**: Ready to proceed with Step 4: Context Reassembly.

**Does the style analysis align with your vision? Do you approve the mitigation strategy for the potential 'Visual Noise Gap'?**
`;

export const getAiResponse = async (step: number, userInput: string, t: (key: TranslationKey) => string, file?: File): Promise<string> => {
  // Simulate network delay
  await new Promise(res => setTimeout(res, 1000 + Math.random() * 800));

  switch (step) {
    case 0:
      return t('aiWelcomeMessage');
    case 1:
      if (!file) return "Please upload the site image to start the analysis.";
      return getStep1Response();
    case 2:
      return `
# Step 2: Building Extraction & Background Restoration Plan Complete

## Execution Overview
**Target Building**: ${mockData.EXISTING_BUILDING_DESC}
**Method**: 95% accuracy precision masking.
**Verification**: Complies with ${mockData.DISTRICT_NAME} building codes.

---

## Part 1: Precision Masking & Removal Zone
*Keyword: Precision_Masking_Removal_Zone_Definition*
- **Masking Accuracy**: Achieved 95.8%.
- **Boundary Definition**: Pixel-level boundaries defined for the main structure.
- **Impact Zone**: Shadow and reflection areas included in the tertiary mask.

## Part 2: Background Restoration Plan
*Keyword: Background_Restoration_Regulation_Verification*
- **Hidden Surfaces**: Sidewalk and road patterns will be algorithmically restored.
- **Code Compliance**: New construction is feasible within a 15m height limit and 60% building coverage ratio.

---
## Ready for Next Step
**Next Step**: Ready to proceed with Step 3: New Building Style Analysis.

**The removal zone and restoration plan are set. Please upload the concept image for the new building to proceed.**
`;
    case 3:
        if (!file) return "Please upload the new building concept image to proceed.";
        return getStep3Response();
    case 4:
      return `
# Step 4: Context Reassembly & Synthesis Plan Complete

## Execution Overview
**Methodology**: Rectified Flow for iterative improvement.
**Quality Target**: 98% realism.

---

## Part 1: Rectified Flow 4-Part Integration
*Keyword: Rectified_Flow_Four_Parts_Integration*
- **Integration Sequence**: 1. Set Scene → 2. Remove Old → 3. Place New → 4. Blend Environment.
- **Weighted Loss**: Focus is 50% on removal area, 30% on new building area.

## Part 2: Physical Reality Validation
*Keyword: Physical_Reality_Validation_Imperfection_Application*
- **Structural Check**: Virtual load analysis passed.
- **Imperfection Patterns**: Selected 'Environmental Weathering' and 'Human Interaction Traces' to enhance realism.

---
## Ready for Next Step
**Next Step**: Ready to proceed with Step 5: Creative GPS Keyword Generation.

**The synthesis plan is complete, targeting 98% realism. Do you approve the selected imperfection patterns?**
`;
    case 5:
      return `
# Step 5: Creative GPS Keyword Generation Complete

## Execution Overview
**Balancing**: Accuracy (70%) vs. Creativity (30%)
**Keywords**: Generated from Photographer, Architect, and Editor perspectives.

---
## Part 1: POSI-GAP-NEG Triangle Balance
*Keyword: Creative_GPS_Triangle_Balance_Calculation*
- **POSITIVE (40%)**: 'Modern modular architecture', 'board-marked concrete', 'natural daylight'.
- **NEGATIVE (30%)**: 'no unrealistic reflections', 'structurally sound', 'contextually appropriate scale'.
- **LATENT GAP (25%)**: 'innovative facade lighting', 'subtle material weathering'.

## Part 2: 3-Perspective Keyword Pools
*Keyword: Three_Perspective_Keywords_Technical_Coordinates*
- **Photographer**: '24mm wide lens', 'golden hour lighting', 'rule of thirds composition'.
- **Architect**: 'post-and-beam construction', 'seamless indoor-outdoor transition'.
- **Editor**: 'contemplative solitude', 'human-scale intimacy'.

---
## Ready for Next Step
**Next Step**: Ready to proceed with Step 6: Final Prompt Generation.

**The core keywords are generated. Any adjustments before we create the final prompt?**
`;
    case 6:
      return `
# Step 6: Final Prompt Generation Complete

## Execution Overview
**Quality Check**: Multimodal reflection system improved prompt clarity to 98.5%.
**Optimization**: Prompts are optimized for Midjourney, DALL-E, and Stable Diffusion.

---

## Final Synthesis Prompt (English)
*A professional architectural photograph of a modern modular building replacing an old brick structure in a bustling Seoul neighborhood. Utilizes a 4-part integration system for seamless blending. The design features board-marked concrete and large glass panels, emphasizing natural daylight. Photographed with a 24mm wide lens during the golden hour, using a rule of thirds composition to create a sense of contemplative solitude and human-scale intimacy. The image should be hyper-realistic, with subtle environmental weathering on the concrete and structurally sound details. --ar 16:9 --v 6*

## 최종 합성 프롬프트 (한국어)
*서울의 번화한 동네, 오래된 벽돌 건물을 대체하는 현대적인 모듈러 건축물의 전문 건축 사진. 4단계 통합 시스템을 활용하여 완벽하게 합성. 보드마크 콘크리트와 대형 유리 패널을 특징으로 하며 자연 채광을 강조. 골든아워에 24mm 광각 렌즈로 촬영되었으며, 3분할 구도를 사용하여 사색적인 고독감과 인간적인 스케일의 친밀감을 연출. 콘크리트의 미묘한 환경적 풍화와 구조적으로 안정적인 디테일을 포함한 초현실적인 이미지. --ar 16:9 --v 6*

---
## Project Complete
The prompt generation process is complete. You can now use this prompt in your preferred image generation tool.

**To start the interactive editing phase for a generated image, type 'edit'.**
`;
    case 7:
        return "Entering interactive editing mode. The image viewer is now active. You can select an area to modify and provide instructions below."
    default:
      return "I'm sorry, I've encountered an error. Please try again.";
  }
};
