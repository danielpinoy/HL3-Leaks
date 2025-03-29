const leakData = {
  categories: [
    {
      id: "findings",
      name: "Key Findings",
      icon: "🔍",
      description:
        "Core references and evidence pointing to Half-Life 3 development",
    },
    {
      id: "gravity",
      name: "Gravity Manipulation",
      icon: "🌌",
      description: "Systems for altered gravity and physics manipulation",
    },
    {
      id: "xen",
      name: "Xen Creatures",
      icon: "👾",
      description: "References to alien creatures and Xen environment elements",
    },
    {
      id: "npc",
      name: "NPC & AI Systems",
      icon: "🤖",
      description: "Advanced AI frameworks and NPC behavior systems",
    },
    {
      id: "animation",
      name: "Animation Systems",
      icon: "🎬",
      description: "Speech and character animation technologies",
    },
    {
      id: "environment",
      name: "Environmental Systems",
      icon: "🌍",
      description: "Water, wind, and environment simulation systems",
    },
    {
      id: "vehicles",
      name: "Vehicle Systems",
      icon: "🚗",
      description: "Vehicle physics and interaction frameworks",
    },
    {
      id: "physics",
      name: "Physics Settings",
      icon: "⚙️",
      description: "Advanced physics simulation parameters",
    },
  ],

  findings: [
    {
      id: "hl3-bugreporter",
      title: "HL3 Mention in Deadlock Bugreporter Config",
      description:
        'References in Deadlock bug reporter using "HLX" identifier suggests late-stage Half-Life 3 development.',
      category: "findings",
      codeSnippet: `"HLX"
  {
      "version"       "2"
      "owner"         "triage*"
      "severity"      "high"
      "priority"      "none"
      "category"      "---"
      "product"       "HLX"
      "component"     "hlx"
  }`,
      additionalInfo:
        'This reference to "HLX" appears to be a codename for Half-Life 3, following Valve\'s naming convention for projects in development.',
    },
    {
      id: "fsr3-implementation",
      title: "HL3 FSR3 (2025)",
      description:
        "FSR 3 implementation typically occurs in the later stages of game development, after core mechanics and rendering pipelines are established.",
      category: "findings",
      codeSnippet: "+r_hlx_fsr3_min_reactiveness",
      additionalInfo:
        "Developers prioritize base functionality first, then integrate advanced upscaling technologies like FSR 3 during optimization phases when focusing on performance tuning and visual refinement.",
    },
    {
      id: "hev-suit",
      title: "H.E.V. Suit References",
      description:
        "Code for the iconic Half-Life H.E.V. suit functionality, including plug detachment sounds and interactions.",
      category: "findings",
      codeSnippet: "+HEVSuit.PlugDetach",
      additionalInfo:
        "The H.E.V. suit is a staple of the Half-Life series, and these references continue that tradition with enhanced functionality.",
    },
    {
      id: "gravity-gun",
      title: "Gravity Gun Mechanics",
      description:
        "Advanced physics manipulation system with multiple interaction modes (grab and punt), including priority settings, mass/size overrides, and orientation control.",
      category: "gravity",
      codeSnippet: `physcannon_maxforce
  physcannon_minforce
   
  enablemotionongravitygrab
  enablemotionongravitygrab(boolean) : "Enable Motion On Grab" : 0
   
  cannotgravitygrab
  cannotgravitygrab(boolean) : "Cannot Gravity Grab" : 0
  
  cannotgravitypunt
  cannotgravitypunt(boolean) : "Cannot Gravity Punt" : 0`,
      additionalInfo:
        "The Gravity Gun appears to have expanded functionality compared to Half-Life 2, with new options for interaction modes and physics manipulation.",
    },
    {
      id: "gravity-modifiers",
      title: "Gravity Modifiers",
      description:
        "Environment and navigation system for non-standard gravity orientations, allowing AI to navigate in areas with shifted gravity fields.",
      category: "gravity",
      codeSnippet: `m_GravityModifierTips
  
  NavGenNonZUpVolume
  NavGenNonZUpVolumeInfoGravityShift
  
  ai_show_gravity`,
      additionalInfo:
        "This suggests levels with altered gravity, potentially for Xen environments or other alien landscapes.",
    },
    {
      id: "xen-creatures",
      title: "Xen Creatures Navigation Hints",
      description:
        "Navigation and behavior hints for various Xen creatures including Houndeyes, Gorillas, and Jellyfish.",
      category: "xen",
      codeSnippet: `HINT_XENAMBIENT_FOOD_DIG
   
  HINT_XENGORILLA_RETREAT_SPOT
  
  HINT_XENJELLYFISH_FOOD
  HINT_XENJELLYFISH_REACH
  
  HINT_XENSWOOPER_CIRCLING_CENTER
  HINT_XENSWOOPER_FOOD
  HINT_XENSWOOPER_LANDING_SPOT`,
      additionalInfo:
        "These navigation hints suggest complex behavior patterns for alien creatures, some familiar from previous Half-Life games and some new additions.",
    },
    {
      id: "ai-lod",
      title: "AI LOD (Level of Detail)",
      description:
        "Sophisticated AI framework with performance-scalable behaviors through Level of Detail (LOD) systems.",
      category: "npc",
      codeSnippet: `ai_lod
  ai_lod_auto_enabled
  ai_lod_debug_display
  
  ai_lod(choices) : "AI LOD" : "0" : "Determines what AI features are enabled/disabled for performance reasons" =
  [
      "-1" : "Auto"
      "0" : "High"
      "1" : "Medium"
      "2" : "Low"
      "3" : "Very Low"
  ]`,
      additionalInfo:
        "This framework allows both developers and possibly end users to adjust AI complexity to match hardware capabilities. This type of configuration system is typically implemented mid-development after core AI systems are functional but before final optimization passes.",
    },
    {
      id: "destructible-npcs",
      title: "Destructible NPCs System",
      description:
        "Framework for damaging specific parts of NPCs with detailed health tracking, hit group management, and visual representation.",
      category: "npc",
      codeSnippet: `Destructible Parts
  DestructiblePartsSystemData
  DestructiblePartsSystemData_PartDataProxy
  DestructiblePartsSystemData_PartDataProxyVector
  DestructiblePartsSystemData_PartRuntimeData
  DestructiblePartsSystemData_HitGroupInfoAndPartData
  DestructiblePartsSystemComponent`,
      additionalInfo:
        "This suggests a more detailed damage model for NPCs, allowing specific body parts to be damaged or destroyed independently.",
    },
    {
      id: "mood-animation",
      title: "Mood-Based Animation System",
      description:
        "A system that controls NPC animations based on emotional states, enhancing character expressiveness.",
      category: "animation",
      codeSnippet: `MoodType_t
  m_nMoodType
  
  MoodAnimation_t
  MoodAnimationLayer_t
  
  eMoodType_Body
  eMoodType_Head`,
      additionalInfo:
        "This Source 2 mood system uses layers triggered by listening or talking with customizable timing and intensity. It uses an animgraph-driven approach to dynamically select and blend animations based on mood types, making NPCs appear more lifelike in response to in-game events or dialogue.",
    },
    {
      id: "water-system",
      title: "Water and Water Levels",
      description:
        "Comprehensive water simulation system with depth tracking, buoyancy effects, and player interaction.",
      category: "environment",
      codeSnippet: `water
  waterStart
  
  waterDepth
  flWaterDepth
  
  WaterEffectsDepth
  Water.PlayerEnter
  Water.PlayerExit`,
      additionalInfo:
        "The water system includes visual effects based on underwater state, swimming mechanics, and environmental interactions.",
    },
    {
      id: "vehicle-physics",
      title: "Vehicle Physics Components",
      description:
        "Extensive vehicle framework including physics, driver/passenger handling, and wheel simulation.",
      category: "vehicles",
      codeSnippet: `Vehicle
  VehicleAero
  VehicleAero RnVehicleRefl_t::m_Aero
  VehicleArtificalForces
  VehicleArtificalForces RnVehicleRefl_t::m_ArtificialForces
  VehicleBodies
  VehicleDrivetrain`,
      additionalInfo:
        "The vehicle system supports both standard and airborne vehicle modes, with detailed suspension, steering, and damage models.",
    },
    {
      id: "physics-settings",
      title: "Physics Simulation Settings",
      description:
        "Detailed physics simulation parameters for the Source 2 engine.",
      category: "physics",
      codeSnippet: `phys2_contact_debug_draw_size
  phys2_debug_broadphase
  phys2_debug_broadphase_depth
  
  phys_broadphase_tree_collision_height
  phys_build_bounds
  phys_build_mass`,
      additionalInfo:
        "These settings allow for fine-tuning of the physics simulation, crucial for gameplay mechanics relying on the Gravity Gun and environmental interactions.",
    },
  ],
};

export default leakData;
