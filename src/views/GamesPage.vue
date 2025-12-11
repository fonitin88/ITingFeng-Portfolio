<template>
  <!-- Games Page -->
  <div class="main-content">
    <div class="delivery-page">
      <!-- Game Header with Gradient Background -->
      <section class="hero">
        <h1 class="title"> Delivery Dash</h1>
        <div class="hero-badge">🎮 Unity Game</div>
      </section>

      <!-- Game Iframe with Enhanced Frame -->
      <div class="game-wrapper">
        <div class="unity-scale-box">
          <iframe src="https://fonitin88.github.io/delivery-demo/" class="unity-iframe"></iframe>
        </div>
      </div>

      <!-- Gameplay Section -->
      <section class="gameplay-section">
        <!-- <h2 class="gameplay-title">遊戲玩法</h2> -->
        <p class="subtitle">
          小型動作收集遊戲，操作送貨車在時間內收集包裹，躲避或摧毀機器人。
        </p>
        <div class="gameplay-grid">
          <div class="gameplay-card">
            <h3 class="card-title">選擇顏色小貨車</h3>
          </div>

          <div class="gameplay-card">
            <h3 class="card-title">在迷宮中收集包裹</h3>
          </div>

          <div class="gameplay-card">
            <h3 class="card-title">小心機器人，被打到會扣血!</h3>
          </div>

          <div class="gameplay-card">
            <h3 class="card-title">補充油箱能量，可以回復 HP</h3>
          </div>

          <div class="gameplay-card ">
            <h3 class="card-title">空白鍵 開大燈秒殺機器人！</h3>
          </div>

          <div class="gameplay-card">
            <h3 class="card-title">時間到顯示收集包裹數，HP 歸零則進入陣亡畫面。</h3>
          </div>
        </div>
      </section>

      <!-- Tool Cards -->
      <section class="tools-section">
        <div class="section-header">
          <h2 class="section-title">開發工具</h2>
          <p class="section-subtitle">用於快速建立遊戲關卡的 Unity Editor 工具</p>
        </div>

        <!-- Tool 1 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🎨 UI 事件與互動系統</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_1" alt="Color Selection UI" />
              </div>
              <div class="tool-text">
                <p class="tool-description">在遊戲開始前選擇車子顏色，並即時套用到玩家模型</p>
                <ul class="feature-list">
                  <li>Unity UI Button 事件建立玩家點擊與顏色切換的互動流程</li>
                  <li>Renderer 與 Material API 取得材質實例，並透過 SetColor 動態控制Shader參數</li>
                  <li>PlayerPrefs 儲存並載入玩家選擇的顏色設定，實作跨場景儲存</li>
                  <li>運用 RequireComponent 與 GetComponent 自動綁定 Renderer 減少錯誤</li>
                  <li>採用資料 / 視圖 / 控制分離的結構（類 MVC），提升系統可維護性</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 2 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🏗️ 迷宮生成工具</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_2" alt="Maze Generator Editor" />
              </div>
              <div class="tool-text">
                <p class="tool-description">在 Editor中載入模組化物件，一鍵生成迷宮關卡，生成後美術也可以刪除修改</p>
                <ul class="feature-list">
                  <li>運用 EditorWindow 建立自訂編輯器工具</li>
                  <li>以 PrefabUtility.InstantiatePrefab 在 Editor 中生成牆體物件</li>
                  <li>使用 DFS 演算法生成迷宮結構</li>
                  <li>透過 Renderer.bounds 取得實際尺寸，並進行 Tile Snap 排列</li>
                  <li>讀取 TerrainData.size 自動轉換成迷宮 Width / Height，提高工具智慧化程度</li>
                  <li>使用 EditorUtility.DisplayDialog、DestroyImmediate、SceneView.RepaintAll() 實作一鍵生成與清除功能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 3 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🌳 迷宮裝飾工具</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_3" alt="Maze Decoration Tool" />
              </div>
              <div class="tool-text">
                <p class="tool-description">判斷迷宮牆邊，並載入裝飾物件，調整數值來自動生成</p>
                <ul class="feature-list">
                  <li>透過 GetComponentsInChildren<>()掃描迷宮牆面，利用既有標記資料決定裝飾生成位置</li>
                  <li>Random.value、Random.Range 控制 density、距離牆的 offset、縮放範圍，實作隨機但可控的程序化裝飾</li>
                  <li>Renderer.bounds.size 計算牆體厚度，搭配牆的 normal 決定裝飾往外偏移的正確方向</li>
                  <li>使用 GameObject.Find 建立集中管理的 Decorations Root，統一掛載所有裝飾物</li>
                  <li>Object.Instantiate 與 DestroyImmediate 在 Editor 模式中生成 / 清除</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 4 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🗺️ NavMesh 生成小地圖</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_4" alt="NavMesh Minimap Generator" />
              </div>
              <div class="tool-text">
                <p class="tool-description">從 NavMesh 自動生成可走區小地圖 PNG，可自訂區塊的顏色並直接用在 UI 上</p>
                <ul class="feature-list">
                  <li>透過 NavMesh.CalculateTriangulation 與 NavMesh.SamplePosition，從 NavMesh 自動換算出可走 / 不可走區</li>
                  <li>Mathf.Lerp 把 3D 場景壓縮成 2D 貼圖</li>
                  <li>BFS 計算「可走區距離障礙物」與「障礙物距離可走區」的距離場，控制寬度</li>
                  <li>可自訂 Walkable / Edge / Blocked 顏色，並輸出 PNG 小地圖貼圖</li>
                  <li>使用 AssetDatabase 與 TextureImporter 自動化 Minimap 貼圖的輸出流程</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const getIconPath = (filename) => {
  return new URL(`../assets/${filename}.png`, import.meta.url).href;
};
const pics = {
  tool_1: getIconPath('ColorController'),
  tool_2: getIconPath('MazeGenerator'),
  tool_3: getIconPath('MazeDecoration'),
  tool_4: getIconPath('Minimap'),

};

</script>

<style scoped>
/* Hero Section */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 30px;
}

.hero-badge {

  padding: 0.4rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 500;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #00d4ff;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  margin: 20px;
}

/* Game Frame */
.game-wrapper {
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.unity-scale-box {
  transform-origin: top left;
  position: absolute;
}

.unity-iframe {
  width: 1280px;
  height: 720px;
  border: none;
}

/* 核心：自動等比縮放 */
.game-wrapper .unity-scale-box {
  transform: scale(var(--unity-scale));
}

/* Gameplay Section */
.gameplay-section {
  margin-bottom: 4rem;
}

.gameplay-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.8rem;
  text-align: center;
}

.gameplay-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

.gameplay-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
  color: #fff;
  line-height: 1.5;
}

/* Tools Section */
.tools-section {
  margin-top: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}

.section-subtitle {
  font-size: 1rem;
  opacity: 0.6;
}

/* Tool Cards */
.tool-card {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.tool-content {
  padding-top: 0.5rem;
}

.tool-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #fff;
}

.tool-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.tool-image-wrapper {
  width: 300px;
  flex-shrink: 0;
}

.tool-image {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
}

.tool-text {
  flex: 1;
  min-width: 0;
}

.tool-description {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  font-size: 0.95rem;
  opacity: 0.9;
}

.feature-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #00d4ff;
  font-weight: bold;
}


@media (max-width: 600px) {

  .title {
    font-size: 1.8rem;
  }

  .gameplay-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tool-card {
    padding: 1.5rem;
  }

  .tool-title {
    font-size: 1.3rem;
  }
}
</style>