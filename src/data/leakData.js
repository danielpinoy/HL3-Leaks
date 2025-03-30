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
    {
      id: "hair",
      name: "Hair Simulation",
      icon: "💇",
      description: "Advanced hair and cloth rendering and physics simulation",
    },
    {
      id: "destructible",
      name: "Destructible Systems",
      icon: "💥",
      description: "Systems for destruction and damage to NPCs and objects",
    },
    {
      id: "scripting",
      name: "NPC Scripting",
      icon: "📝",
      description: "Advanced scripting systems for NPC behaviors and sequences",
    },
    {
      id: "weapons",
      name: "Weapons & Damage",
      icon: "🔫",
      description: "Weapon systems and damage types",
    },
  ],

  findings: [
    {
      id: "hl3-bugreporter",
      title: "HL3 Mention in Deadlock Bugreporter Config",
      description: "References in Deadlock bug reporter",
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
      title: "HL3 FSR3",
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
  cannotgravitypunt(boolean) : "Cannot Gravity Punt" : 0
  
  gravity_grab_priority
  gravitygrabignoremassandsize
  
  gravity_shift_priority
  gravity_type
  
  gravitygrabignoremassandsize(boolean) : "Grab Ignores Mass" : 0 : "Gravity Grab is possible regardless of whether the object is too heavy or large."`,
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
      id: "altered-gravity",
      title: "Altered Gravity Navigation",
      description:
        "Special entities for navigation in altered gravity environments, likely for Xen areas or special gameplay sequences.",
      category: "gravity",
      codeSnippet: `info_nav_space_flight
  info_nav_space_water
  
  materials/editor/nav_space_flight.vmat_c CRC:00a39b880d size:2288
  materials/editor/nav_space_flight_tga_35406aa8.vtex_c CRC:0049ec7e5b size:23924
  materials/editor/nav_space_water.vmat_c CRC:00751e3c89 size:2304
  materials/editor/nav_space_water_tga_f3f7bd69.vtex_c CRC:0004b3ceea size:23924
  
  AE_ANIMGRAPH_ORIENTATION_WARP_SECTION_END
  AE_ANIMGRAPH_ORIENTATION_WARP_SECTION_START
  AE_ANIMGRAPH_WARP_SECTION_START
  AE_ENABLE_PLATFORM_PLAYER_FOLLOWS_YAW
  AE_ENABLE_PLATFORM_PLAYER_IGNORES_YAW
  
  OrientationWarpRootMotionSource_t
  OrientationWarpTargetOffsetMode_t`,
      additionalInfo:
        "These entities suggest the Source 2 engine has been extended to support navigation in environments with flight or water, with orientation warping and specialized movement. This would be especially useful for creating Xen areas with altered physics rules.",
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
      id: "xen-assets",
      title: "Xen Asset References",
      description:
        "Direct references to Xen entities and assets, including animation offsets and the iconic Houndeye monster.",
      category: "xen",
      codeSnippet: `NPC_Houndeye.Item_Attach 
  
  "Xen Animation Offset"
      {
          matDebugMode XEN_ANIMATION_OFFSET
      }`,
      additionalInfo:
        "The inclusion of Houndeyes, a classic enemy from the original Half-Life, suggests a return to Xen and its creatures. The specialized animation offset system implies these creatures will have unique movement patterns.",
    },
    {
      id: "headcrab-system",
      title: "Headcrab and Zombie System",
      description:
        "Hints and entity references for the iconic Headcrab and Zombie enemies from the Half-Life series.",
      category: "xen",
      codeSnippet: `HINT_HEADCRAB_BURROW_POINT
  HINT_HEADCRAB_EXIT_POD_POINT
  
  Antlion: Burrow Point
  HINT_ANTLION_BURROW_POINT
  
  Antlion: Thumper Flee Point
  HINT_ANTLION_THUMPER_FLEE_POINT
  
  EntityAntlion
  EntityZombie`,
      additionalInfo:
        "These references show AI system for Headcrabs, Zombies, and Antlions, allowing for more complex behaviors such as burrowing and pod emergence. The thumper flee point suggests Antlions will maintain their sand-based behavior from Half-Life 2.",
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
      category: "destructible",
      codeSnippet: `Destructible Parts
  DestructiblePartsSystemData
  DestructiblePartsSystemData_PartDataProxy
  DestructiblePartsSystemData_PartDataProxyVector
  DestructiblePartsSystemData_PartRuntimeData
  DestructiblePartsSystemData_HitGroupInfoAndPartData
  DestructiblePartsSystemComponent
  
  class CDestructiblePartRuntimeDataVector
  {
      CUtlVector< CDestructiblePartRuntimeData > m_DestructiblePartsRuntimeData;
  };
  
  class CDestructiblePartsSystemData
  {
      CUtlOrderedMap< HitGroup_t, CDestructiblePartsSystemData_HitGroupInfoAndPartData > m_DestructiblePartsDataByHitGroup;
  };`,
      additionalInfo:
        "This suggests a more detailed damage model for NPCs, allowing specific body parts to be damaged or destroyed independently. This would enable more realistic combat and enemy reactions to player attacks.",
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
  eMoodType_Head
  
  @PointClass base(ChoreoEvent) = mood : "Mood Event"
  [
      MoodName(string) : "Mood"
      MoodParam(string) : "Animgraph Parameter"
      m_bActiveListening(boolean) : "Active When Listening"
      m_bActiveTalking(boolean) : "Active When Talking"
      m_sModelName(string) : "Model for Animation List"
      m_flIntensity(float) : "Intensity"
      m_flNextStart(float) : "Next Animation Start"
      m_flFadeIn(float) : "Fade In Time"
      m_flFadeOut(float) : "Fade Out Time"
      m_layerAnimations : "Animation Layers"
  ]`,
      additionalInfo:
        "This Source 2 mood system uses layers triggered by listening or talking with customizable timing and intensity. It uses an animgraph-driven approach to dynamically select and blend animations based on mood types, making NPCs appear more lifelike in response to in-game events or dialogue.",
    },
    {
      id: "procedural-speech",
      title: "Procedural Speech Animation",
      description:
        "Integration with Speech Graphics technology for procedurally generated, realistic mouth and facial animations during speech.",
      category: "animation",
      codeSnippet: `speech_graphics = 
  {
      _class = "CSimpleAssetTypeInfo"
      m_FriendlyName = "Speech Graphics RTS"
      m_Ext = "rts"
      m_IconLg = "game:tools/images/assettypes/speech_graphics_lg.png"
      m_IconSm = "game:tools/images/assettypes/speech_graphics_sm.png"
      m_bHideTypeByDefault = true
  }`,
      additionalInfo:
        "This technology would enable more realistic facial animations during dialogue sequences, reducing the need for manual animation of every line. This suggests a focus on narrative and character interaction in the game.",
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
  Water.PlayerExit
  
  m_flFluidDensity
  trigger_buoyancy
  CTriggerBuoyancy
  
  Water Splash Size
  m_nSplashSize
  
  +m_flWaterLevel
  +WaterLevel_t
  +WL_FullyUnderwater
  +UNDER_WATER_DEEP`,
      additionalInfo:
        "The water system includes visual effects based on underwater state, swimming mechanics, and environmental interactions.",
    },
    {
      id: "wind-system",
      title: "Advanced Wind System",
      description:
        "Dynamic wind simulation affecting cloth, vegetation, and physics objects.",
      category: "environment",
      codeSnippet: `+m_bSampleWind
  
  FeNodeWindBase_t
  m_DynNodeWindBases
  m_flWindDrag
  WindDir
  WindStrengthFreq
  
  CEnvWindShared
  C_EnvWindShared::WindAveEvent_t
  C_EnvWindShared::WindVariationEvent_t
  
  max_wind
  min_wind
  
  wind_amount_day
  wind_amount_night
  wind_angle`,
      additionalInfo:
        "This wind system would provide realistic environmental effects, impacting gameplay and immersion by affecting physics objects, vegetation, and fabric. The day/night variation suggests a dynamic world with time-of-day changes.",
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
      id: "vehicle-airborne",
      title: "Vehicle Airborne Mode",
      description:
        "Special system for handling vehicles transitioning between ground-based and airborne states.",
      category: "vehicles",
      codeSnippet: `+m_sAirborneSubclass
  +Subclass we switch to when the vehicle gets airborne
   
  +m_bIsAirborne
  +m_flAirborneModeSwitchAccumulator
   
  +m_flTimeOnGroundToExitAirborne
  +Time with wheels on the ground before we leave airborne mode
   
  +m_flTimeOffGroundToEnterAirborne
  +Time with wheels off the ground before we enter airborne mode`,
      additionalInfo:
        "This system suggests vehicles that can transition between traditional driving and flight or hovering modes, potentially for traversing Xen environments or other exotic locations in the game world.",
    },
    {
      id: "wheel-physics",
      title: "Advanced Wheel Physics",
      description:
        "Detailed physics simulation for vehicle wheels, including suspension, steering, and traction.",
      category: "vehicles",
      codeSnippet: `m_vecWheels
  
  WheelIndex
  WheelInvMass
  WheelRadius
   
  WHEEL_JOINT
  Wheel Joint
  Wheel joint.
  WheelJoint
  
  float RnWheelJointRefl_t::m_flAngularLambda1
  float RnWheelJointRefl_t::m_flAngularMotorLambda
  float RnWheelJointRefl_t::m_flLinearLambda1
  float RnWheelJointRefl_t::m_flSuspensionDampingRatio
  float RnWheelJointRefl_t::m_flSuspensionFrequency
  float RnWheelJointRefl_t::m_flSuspensionRestLoad`,
      additionalInfo:
        "This exceptionally detailed wheel physics system would enable realistic vehicle behavior under various conditions. The attention to suspension details suggests an emphasis on vehicle-based gameplay that feels realistic and responsive.",
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
    {
      id: "buoyancy-physics",
      title: "Buoyancy Physics System",
      description:
        "Advanced physics for objects and characters interacting with water and other fluids.",
      category: "physics",
      codeSnippet: `phys_buoyancy_angular_damping_multiplier
  phys_buoyancy_drag_multiplier
  phys_buoyancy_horizontal_damping_multiplier
  phys_buoyancy_max_acceleration
  phys_buoyancy_vertical_damping_multiplier
  
  trigger_buoyancy
  m_flFluidDensity
  CTriggerBuoyancy`,
      additionalInfo:
        "This system enables realistic floating, sinking, and movement in water, which would be important for water-based puzzles and environments. The ability to adjust buoyancy parameters suggests complex water physics interactions.",
    },
    {
      id: "damage-types",
      title: "Expanded Damage Types",
      description:
        "Comprehensive system of damage types defining how various weapons and hazards affect characters and objects.",
      category: "weapons",
      codeSnippet: `DMG_ACID
  DMG_BLAST
  DMG_BLAST_SURFACE
  DMG_BUCKSHOT
  DMG_BULLET
  DMG_BURN
  DMG_CLUB
  DMG_CRUSH
  DMG_DISSOLVE
  DMG_DROWN
  DMG_DROWNRECOVER
  DMG_ENERGYBEAM
  DMG_FALL
  DMG_GENERIC
  DMG_LASTDFLAG
  DMG_LASTGENERICFLAG
  DMG_PHYSGUN
  DMG_POISON
  DMG_RADIATION
  DMG_SHOCK
  DMG_SLASH
  DMG_SONIC`,
      additionalInfo:
        "This extensive list of damage types builds on Source 1's foundations (e.g., DMG_PHYSGUN, DMG_DISSOLVE) while adding Source 2-style expansions (e.g., DMG_ACID, DMG_SONIC) that fit an FPS with Xen and Combine elements. It suggests a detailed combat system with varied weapon types and environmental hazards.",
    },
    {
      id: "explosion-types",
      title: "Explosion System",
      description:
        "Comprehensive system for different types of explosions with varied effects and behaviors.",
      category: "weapons",
      codeSnippet: `EXPLOSION_TYPE_COUNT
  EXPLOSION_TYPE_CUSTOM
  EXPLOSION_TYPE_DEFAULT
  EXPLOSION_TYPE_ELECTRICAL
  EXPLOSION_TYPE_EMP
  EXPLOSION_TYPE_EXPLOSIVEBARREL
  EXPLOSION_TYPE_FIREWORKS
  EXPLOSION_TYPE_FLASHBANG
  EXPLOSION_TYPE_GASCAN
  EXPLOSION_TYPE_GASCYLINDER
  EXPLOSION_TYPE_GRENADE
  EXPLOSION_TYPE_ICE
  EXPLOSION_TYPE_MOLOTOV
  EXPLOSION_TYPE_NONE
  EXPLOSION_TYPE_SHRAPNEL
  EXPLOSION_TYPE_SMOKEGRENADE
  EXPLOSION_TYPE_TRIPMINE`,
      additionalInfo:
        "The variety of explosion types suggests diverse weapon and environmental interactions. Types like EMP, Ice, and Electrical hint at more varied gameplay mechanics beyond traditional explosives, potentially including different tactical approaches and environmental interactions.",
    },
    {
      id: "advanced-hair",
      title: "Advanced Hair Simulation",
      description:
        "Sophisticated hair rendering and physics system for realistic character appearance.",
      category: "hair",
      codeSnippet: `r_hair_ao
  r_hair_debug_guides
  r_hair_indirect_transmittance
  r_hair_meshshader
  r_hair_shadowcatcher
  r_hair_shadowtile
  r_hair_voxel_divisor
  r_hair_voxels
  r_hair_wind_global_scale
  r_hair_wind_noise_speed
  r_hair_wind_motion_scale
  r_hair_wind_noise
  r_hair_wind_noise_occlusion
  r_hair_wind_occlusion`,
      additionalInfo:
        "This advanced hair system would allow for realistic hair physics that reacts to movement, wind, and other forces. The attention to shadow casting and wind interaction suggests a focus on visual fidelity and realism for characters.",
    },
    {
      id: "cloth-simulation",
      title: "Cloth Simulation System",
      description:
        "Physics-based cloth simulation with wind interaction and collision detection.",
      category: "hair",
      codeSnippet: `cloth_approximate_collide
  cloth_batch
  cloth_cdt_mul
  cloth_damping_bias
  cloth_damping_multiplier
  cloth_debug
  cloth_debug_draw_nodepth_alpha
  cloth_dry_drag
  cloth_dry_drag_soften
  cloth_filter_transform_stateless
  cloth_ground_offset
  cloth_ground_plane_thickness
  cloth_guard_threshold
  cloth_interpolation_strategy
  cloth_legacy_stretch_force
  cloth_legacy_support
  cloth_max_ticks_per_frame
  cloth_node_debug_axis_length
  cloth_quad_smooth_iterations
  cloth_quad_smooth_rate
  cloth_quasistatic_iters
  cloth_reload_immediately
  cloth_resim_after
  cloth_rigid_update
  cloth_rod_smooth_iterations
  cloth_rod_smooth_rate
  cloth_sdf_antitunnel
  cloth_sdf_collision
  cloth_simulate
  cloth_sleep_threshold
  cloth_solver
  cloth_step
  cloth_step_variability
  cloth_watch
  cloth_wind
  cloth_wind_pitch`,
      additionalInfo:
        "This detailed cloth simulation system would create realistic movement for clothing, flags, and other fabric elements in the game. The interaction with wind and collision suggests dynamic environments where cloth responds naturally to player actions and environmental conditions.",
    },
    {
      id: "npc-scripting",
      title: "Advanced NPC Scripting System",
      description:
        "Comprehensive framework for scripting complex NPC behaviors and sequences.",
      category: "scripting",
      codeSnippet: `@BaseClass base(Targetname, Parentname) = BaseScripted
  [
      m_iszEntity(target_destination) : "Target NPC" : : "Name or class (e.g., 'npc_zombie') of the NPC to script."
      m_iszIdle(sequence) : "Pre Action Idle Animation" : "" : "Sequence (e.g., 'idle01') before action."
      m_iszEntry(sequence) : "Entry Animation" : "" : "Sequence (e.g., 'reload02') at start."
      m_iszPlay(sequence) : "Action Animation" : "" : "Main sequence (e.g., 'reload02')."
      m_iszPostIdle(sequence) : "Post Action Idle Animation" : "" : "Sequence (e.g., 'idle01') after action."
      m_iszCustomMove(sequence) : "Custom Move Animation" : "" : "Sequence (e.g., 'crouch_run01') for movement."
      m_fMoveTo(Choices) : "Move to Position" : 1 = [0:"No", 1:"Walk", 2:"Run", 3:"Custom", 4:"Instant", 5:"Turn to Face"]
      m_bIgnoreGravity(boolean) : "Ignore Gravity" : 0
      input BeginSequence(void) : "Start the scripted sequence."
      input MoveToPosition(void) : "Move NPC to script location."
      input CancelSequence(void) : "Stop the sequence."
      output OnBeginSequence(void) : "Fires when sequence starts."
      output OnEndSequence(void) : "Fires when sequence ends."
  ]`,
      additionalInfo:
        "This robust NPC scripting system would enable complex choreographed sequences and behaviors, enhancing both narrative moments and gameplay. The ability to script specific animations, movements, and behavior chains suggests a focus on cinematic storytelling and varied NPC interactions.",
    },
    {
      id: "npc-behaviors",
      title: "NPC Behavior Parameters",
      description:
        "Detailed parameters controlling NPC behavior, movement, and decision-making.",
      category: "scripting",
      codeSnippet: `invulnerable(boolean) : "Invulnerable" : 1 : "If enabled, this will have a ton of health and will not allow damage."
  
  m_fMoveTo(Choices) : "Move to Position" : "eMoveWithGait" =
      [
      "eWait"         : "No"
          "eMoveWithGait" : "Use Specified Gait"
          "eTeleport"     : "Instantaneous"
          "eWaitFacing"   : "No - Turn to Face"
      ]
  move_to_gait(choices) : "Move to Gait" : "eInvalid" : "Gait to use if Move to Position is set to 'Use Specified Gait'." =
      [
          "eInvalid"  : "Code-Driven"
          "eSlow"     : "Slow (Walk)"
          "eMedium"   : "Medium (Jog)"
          "eFast"     : "Fast (Run)"
          "eVeryFast" : "Very Fast (Sprint)"
      ]
      
  repeatable(boolean) : "Is Repeatable" : 0 : "If yes, this scripted sequence can be started multiple times."
  
  should_leave_corpse(boolean) : "Leave Corpse (if not, fade)" : 0 : "If no, the NPC will fade out if it's in a dying state."`,
      additionalInfo:
        "These parameters offer fine-grained control over NPC behaviors, enabling varied movement styles, reactions, and gameplay-relevant decisions. The detailed movement gait options suggest nuanced character animations and behaviors that respond appropriately to different situations.",
    },
    {
      id: "destructible-parts",
      title: "Destructible Parts System",
      description:
        "Framework for creating objects and characters with parts that can be individually destroyed.",
      category: "destructible",
      codeSnippet: `AE_DESTRUCTIBLE_PART_DESTROY
   
  DESTRUCTIBLE_MAIN
   
  debug_destructible_parts
  debug_destructible_parts_enabled
  debug_destructible_parts_ttl
   
  destructible_parts_destroy_parts_when_gibbing
   
  Toggle enabling/disabling the destructible parts system for debug.
   
  Draw debug information for destructible parts.
   
  ModelAnimEvent = AE_DESTRUCTIBLE_PART_DESTROY 
  [
      hit_group(string)		: "Hit Group Name"
      part_index(int)			: "Part to destroy up to" : "0"
      force(float) 			: "Force to apply if part breaks" : 0
      force_radius(float) 	: "Force radius to use for broken parts" : 24
  ]`,
      additionalInfo:
        "This system enables detailed destruction of NPCs and objects, with parts breaking off based on damage location and type. The parameters for force and radius suggest physics-based destruction effects that interact realistically with the environment.",
    },
    {
      id: "ragdoll-system",
      title: "Advanced Ragdoll System",
      description:
        "System for realistic physics-based character death animations and ragdoll behaviors.",
      category: "physics",
      codeSnippet: `game_ragdoll_manager
  
  class CRagdollManager : public C_BaseEntity
  {
      int8 m_iCurrentMaxRagdollCount;
  };
  
  class CRagdollManager : public CBaseEntity
  {
      bool m_bCanTakeDamage;
  };
  
  class RagdollCreationParams_t
  {
      int32 m_nHealthToGrant;
  };`,
      additionalInfo:
        "This system would manage the creation and behavior of ragdoll physics objects when characters die, with parameters to control their behavior and limit performance impact. The ability to grant health to ragdolls suggests they might be reanimated in some situations, potentially for zombie or resurrection gameplay mechanics.",
    },
  ],
};

export default leakData;
