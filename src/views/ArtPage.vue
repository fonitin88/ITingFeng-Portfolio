<template>
  <!-- Art Page -->
  <div class="main-content">
    <h1 class="page-title">Art</h1>
    <p>{{ $t('art.text') }}</p>
    <div class="grid">
      <a v-for="(artwork, index) in artworks" :key="index" :href="artwork.link" target="_blank"
        rel="noopener noreferrer" class="card">
        <div>
          <div class="card-image square"><img :src=artwork.pic :alt="artwork.name"></div>
          <div class="card-content">
            <h3 class="card-title">{{ artwork.name }}</h3>
            <p class="card-text">{{ artwork.text }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const artworks = ref([
  {
    pic: "https://cdna.artstation.com/p/assets/images/images/037/828/154/20210519075118/smaller_square/i-ting-feng-ting-01.jpg?1621428679",
    name: "Sorceress",
    text: "Personal Character",
    link: "https://www.artstation.com/artwork/5XxeLJ"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/071/289/061/smaller_square/i-ting-feng-i-ting-feng-icon2.jpg?1704866021",
    name: "Factory",
    text: "Personal Environment",
    link: "https://www.artstation.com/artwork/296Wag"
  },
  {
    pic: "https://cdna.artstation.com/p/assets/covers/images/086/239/444/smaller_square/i-ting-feng-i-ting-feng-diorama.jpg?1742729308",
    name: "Arrival Zone",
    text: "Project Scape",
    link: "https://www.artstation.com/artwork/Gvql0W"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/071/776/527/smaller_square/i-ting-feng-i-ting-feng-highresscreenshot00001.jpg?1705932489",
    name: "Abandoned Motel",
    text: "Personal Environment",
    link: "https://www.artstation.com/artwork/GeKoN1"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/images/images/042/073/103/smaller_square/i-ting-feng-final-v2-upload03.jpg?1633506994",
    name: "Samurai sword girl",
    text: "Personal Character",
    link: "https://www.artstation.com/artwork/48DaJk"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/images/images/049/715/721/smaller_square/i-ting-feng-20220521-03.jpg?1653146008",
    name: "Little Red Riding Hood",
    text: "Personal Character",
    link: "https://www.artstation.com/artwork/9NQwyq"
  },
  {
    pic: "https://cdna.artstation.com/p/assets/covers/images/044/491/366/smaller_square/i-ting-feng-i-ting-feng-11.jpg?1640163510",
    name: "Kratos",
    text: "Fanart God of War ",
    link: "https://www.artstation.com/artwork/qQeGKz"
  },
  {
    pic: "https://cdna.artstation.com/p/assets/images/images/042/415/426/smaller_square/i-ting-feng-uplox-05.jpg?1634467820",
    name: "Women Power",
    text: "Personal Character",
    link: "https://www.artstation.com/artwork/g2ZgN8"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/030/689/789/smaller_square/i-ting-feng-i-ting-feng-scene-laplace01.jpg?1601366215",
    name: "Instance Dungeon_1",
    text: "Project La place",
    link: "https://www.artstation.com/artwork/eaxyxP"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/030/689/467/smaller_square/i-ting-feng-i-ting-feng-scene-laplace02.jpg?1601365061",
    name: "Instance Dungeon_2",
    text: "Project La place",
    link: "https://www.artstation.com/artwork/aYLeEX"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/030/659/457/smaller_square/i-ting-feng-i-ting-feng-obj06.jpg?1601284364",
    name: "3D props_1",
    text: "Project Dragon Slayer",
    link: "https://www.artstation.com/artwork/WKG09E"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/030/659/183/smaller_square/i-ting-feng-i-ting-feng-obj04.jpg?1601283616",
    name: "3D props_2",
    text: "Project Dragon Slayer",
    link: "https://www.artstation.com/artwork/xJqPKW"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/covers/images/030/657/867/smaller_square/i-ting-feng-i-ting-feng-obj05.jpg?1601279446",
    name: "3D props_3",
    text: "Project Dragon Slayer",
    link: "https://www.artstation.com/artwork/OyqgJk"
  },
  {
    pic: "https://cdnb.artstation.com/p/assets/images/images/018/945/817/20191203000648/smaller_square/i-ting-feng-weapon23.jpg?1575353208",
    name: "Tracer",
    text: "Fan art Overwatch Weapon",
    link: "https://www.artstation.com/artwork/L2JN9l"
  },
  {
    pic: "https://cdna.artstation.com/p/assets/images/images/019/386/114/20191204002344/smaller_square/i-ting-feng-weapon21-withoutmail.jpg?1575440624",
    name: "D.VA",
    text: "Fan art Overwatch Weapon",
    link: "https://www.artstation.com/artwork/3oQ19B"
  },

]);

</script>

<style scoped>
.page-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.main-content>p {
  color: #9ca3af;
  margin-bottom: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  text-decoration: none;
  background-color: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
  color: inherit;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
  overflow: hidden;
}

.card-image.square {
  padding-bottom: 100%;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-bottom: 0.5rem;
}

.card-text {
  color: rgb(147, 147, 147);
}
</style>