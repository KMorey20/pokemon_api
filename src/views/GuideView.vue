<!-- Guide Page -->
<!-- General information on the games themselves-->

<script setup>
    import SiteNav from '@/components/SiteNav.vue'
</script>

<template>

    <SiteNav />

    <div class="shared-container">
      <h1>Trainer's Guide: How Pokémon Works</h1>
  
      <section>
        <h2> Combat Basics </h2>
        <p>
          Pokémon battles are turn-based, where two or more Pokémon take turns using moves to reduce the opponent's HP (Hit Points). 
          Each Pokémon can know up to four moves at a time, and the battle ends when all Pokémon on one side have fainted (0 HP).
        </p>
        <p>
          Stats like <strong>Attack</strong>, <strong>Defense</strong>, <strong>Speed</strong>, and <strong>Special Attack</strong> 
          influence the effectiveness of your Pokémon in battle.
        </p>
        <img class="img" src="/m3yeszrwsryc1.png" alt="combat ui" height="326" width="436" />
        <p class = "tagline">Example of a Pokémon battle interface. This is from Soul Silver and Heart Gold specifically, however the 
            general idea has remained the same throughout the franchise.
        </p>
      </section>

      <section>
        <h2> Move Types </h2>
        <p>
          Moves can be categorized into two types: <strong>Physical</strong> and <strong>Special</strong>. Physical moves rely on the Pokémon's 
          Attack and the opponent's Defense, while Special moves depend on Special Attack and Special Defense.
        </p>
        <p>
          Each move also has a type (like Fire, Water, or Grass), which can affect its effectiveness against different Pokémon types. When a move type
          matches the Pokémon's type, it deals 1.5x damage (known as STAB - Same Type Attack Bonus).
        </p>
        <h2> Move Power and Accuracy </h2>
        <p>
          Each move has a <strong>Power</strong> rating, which determines how much damage it can deal. The higher the power, the more damage it can inflict.
          Additionally, moves have an <strong>Accuracy</strong> rating that indicates the likelihood of hitting the target. A move with 100% accuracy will always hit,
          while a move with lower accuracy may miss.
        </p>
        <p>
          Some moves have additional effects, like causing status conditions (e.g., paralysis or sleep) or raising/lowering stats (e.g., Attack or Defense).
        </p>
      </section>

      <section>
        <h2>Battle Items</h2>
        <p>
          Items can be used during battles to heal Pokémon, boost stats, or inflict damage. Common items include Potions (for healing) and X Attack (for boosting Attack).
          Some items can only be used once, while others can be used multiple times. Be strategic in using items to turn the tide of battle in your favor.  
        </p>
        <p>
          Additionally, some Pokémon can hold items that provide benefits during battle, like Leftovers (heals a small amount of HP each turn) or Choice Band (boosts Attack but locks the Pokémon into one move).
        </p>
      </section>
  
      <section>
        <h2> Turn Order </h2>
        <p>
          Turn order is determined by a Pokémon's <strong>Speed</strong>. The faster Pokémon usually attacks first, which can give a
          significant tactical advantage.
        </p>
      </section>
  
      <section>
        <h2> Status Effects </h2>
        <ul>
          <li><strong>Paralysis</strong> - May prevent a move and reduces Speed</li>
          <li><strong>Sleep</strong> - Cannot act for several turns</li>
          <li><strong>Burn</strong> - Takes damage each turn and halves Attack</li>
          <li><strong>Poison</strong> - Gradual HP loss every turn</li>
          <li><strong>Freeze</strong> - Prevents movement until thawed</li>
          <li><strong>Confusion</strong> - May hurt itself instead of attacking</li>
        </ul>
      </section>
  
      <section>
        <h2> Type Matchups </h2>
        <p>
          Every Pokémon has one or two <strong>types</strong> (like Water, Fire, or Grass). Moves also have types, and their effectiveness 
          depends on the opponent's type.
        </p>
  
        <table class="type-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Strong Against</th>
              <th>Weak Against</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Fire</td><td>Grass, Bug, Ice, Steel</td><td>Water, Rock, Fire</td></tr>
            <tr><td>Water</td><td>Fire, Rock, Ground</td><td>Electric, Grass</td></tr>
            <tr><td>Grass</td><td>Water, Ground, Rock</td><td>Fire, Flying, Bug</td></tr>
            <!-- Add more if you'd like -->
          </tbody>
        </table>

        <img class="img" src="/typechart.png" alt="type chart"/>
      </section>
  
      <section>
        <h2> Stat Breakdown </h2>
        <ul>
          <li><strong>HP</strong> – Hit Points: how much damage a Pokémon can take</li>
          <li><strong>Attack</strong> – Physical attack power</li>
          <li><strong>Defense</strong> – Resistance to physical attacks</li>
          <li><strong>Special Attack</strong> – Power of special moves (like Fire Blast)</li>
          <li><strong>Special Defense</strong> – Resistance to special moves</li>
          <li><strong>Speed</strong> – Determines move order in battles</li>
        </ul>
      </section>
  
      <section>
        <h2> Pro Tip </h2>
        <p>
          Always think about <strong>type advantages</strong> and <strong>move coverage</strong>. Having a balanced team helps you 
          adapt to different opponents!
        </p>
      </section>
    </div>
  </template>