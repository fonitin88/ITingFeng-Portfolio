// src/locales/zh-TW.js
export default {
    header: {
        name: "馮宜婷",
        about: "關於我",
        experience: "經歷",
        games: "程式",
        art: "美術",
    },
    about: {
        intro: `我是一名 遊戲開發者，熱愛3D模型製作、場景設計美術，以及各種美術工具與程式開發流程。
    擅長開放世界環境、Shader、程序化物件、風格化或寫實、渲染優化、PBR 工作流程等。`,

        sectionTitles: {
            skills: "技能",
            tools: "軟體工具",
            education: "學歷",
        },

        stats: {
            years: "年經驗",
            games: "款遊戲",
            artworks: "件作品",
        },

        skills: {
            col1: [
                "全端開發",
                "Shader Graph ",
                "遊戲玩法程式",
                "客製程序化工具",
                "C#, JavaScript, VUE, HTML5, CSS",
                "ASP.NET, SQL",
            ],
            col2: [
                "高低模建模",
                "關卡美術",
                "寫實與風格化製作",
                "打光",
                "PBR 工作流程",
                "特效與粒子系統",
            ],
        },


        education: {
            line1: {
                period: "2008/09~2011/07",
                degree: "美術系學士",
                school: "台南大學",
            },
            line2: {
                period: "2025/08~2025/11",
                degree: "全端網頁工程師培訓",
                school: "健行科技大學",
            },
        },
    },
    experience: {
        xlegend: {
            name: "傳奇網路",
            period: "2012.4 – 2018.3",
            duration: "5 年 11 個月",
            location: "台灣",
            projects: {
                dragon: {
                    name: "狩龍戰紀",
                    role: "3D場景物件",
                },
                gd: {
                    name: "晴空物語",
                    role: "關卡美術 / 3D場景物件 /材質製作 / 特效",
                },
                laplace: {
                    name: "拉普拉斯的神子",
                    role: "關卡美術 / 3D場景物件 /材質製作 / 特效",
                },
                aurakingdom: {
                    name: "幻想神域手機板",
                    role: "關卡美術 / 3D場景物件 /材質製作 / 特效",
                },
            },
        },

        toppath: {
            name: "祥捷國際",
            period: "2018.5 – 2022.3",
            duration: "3 年 10 個月",
            location: "台灣",
            projects: {
                ebet: {
                    name: "eBET",
                    role: "UI/Banner/電子報/影片製作 /2D & 3D 遊戲物件 / 特效",
                },
            },
        },

        finifugu: {
            name: "Finifugu",
            period: "2020.2 – 2020.8",
            duration: "6 個月專案",
            location: "香港（遠端合作）",
            projects: {
                themepark: {
                    name: "ThemePark Island",
                    role: "3D場景模型 /3D角色模型 / 動畫設定",
                },
            },
        },

        neobards: {
            name: "泥巴娛樂",
            period: "2022.4 – 2023.10",
            duration: "1 年 6 個月",
            location: "台灣",
            projects: {
                dwm: {
                    name: "真・三國無雙 M",
                    role: "關卡美術 / 3D場景模型 / 場景優化",
                },
            },
        },

        ringtail: {
            name: "Ringtail Interactive",
            period: "2024.5 – 2025.4",
            duration: "11 個月",
            location: "瑞典",
            projects: {
                scape: {
                    name: "Scape",
                    role: "場景美術 / 3D場景模型/ 場景優化",
                },
            },
        },
    },
    art: {
        text: "如果想看更多作品，歡迎聯絡我"
    },
    contact: {
        title: "聯絡我",
        to: "收件人：",
        fields: {
            emailLabel: "您的 Email",
            emailPlaceholder: "name@example.com",
            subjectLabel: "主旨",
            subjectPlaceholder: "作品集 / 合作洽談...",
            messageLabel: "訊息內容",
            messagePlaceholder: "請在這裡輸入您的訊息...",
        },
        send: "送出",
    },
    code: {
        heroBadge: 'Unity 小遊戲',

        gameplayCards1: '使用鍵盤的WASD來操作貨車，並在時間內收集包裹',
        gameplayCards2: '躲避或使用空白鍵開大燈摧毀機器人。',

        toolsTitle: '客製化開發工具',
        toolsSubtitle: '用於快速建立遊戲關卡的 Unity Editor 工具',
        tool1: {
            title: 'UI 事件與互動系統',
            description: '在遊戲開始前選擇車子顏色，並即時套用到玩家模型。',
            features: [
                '使用 Unity UI Button 事件建立玩家點擊與顏色切換的互動流程',
                '透過 GetComponent<>() 取得 Renderer，建立材質實例並使用 SetColor 即時控制 Shader 顏色參數。',
                '使用 ScriptableObject 作為即時共用狀態，並透過 PlayerPrefs 進行持久化儲存，實作跨場景與重啟後的玩家顏色設定同步。',
                '採用資料 / 視圖 / 控制分離的結構（類 MVC），提升系統可維護性與可讀性'
            ]
        },
        tool2: {
            title: '迷宮生成工具',
            description: '在 Editor 中載入模組化物件，一鍵生成迷宮關卡，生成後美術也可以手動刪除與調整。',
            features: [
                '運用 EditorWindow 建立自訂編輯器工具面板',
                '以 PrefabUtility.InstantiatePrefab 在 Editor 模式中生成牆體物件',
                '使用 DFS 演算法生成迷宮結構',
                '透過 Renderer.bounds 取得實際尺寸，進行牆的排列',
                '使用DestroyImmediate、SceneView.RepaintAll() 一鍵生成與清除流程'
            ]
        },
        tool3: {
            title: '迷宮裝飾工具',
            description: '判斷迷宮牆邊並載入裝飾物件，透過調整數值自動生成樹木、石頭等物件。',
            features: [
                '製作標記的Component 搭配 GetComponentsInChildren<>() 掃描迷宮牆面，決定裝飾生成位置',
                '使用 Random.value、Random.Range 控制密度、牆的距離、縮放範圍，隨機但可控的生成物件',
                '搭配 normalized，去判斷朝向來生成物件',
                '透過 GameObject.Find 尋找或建立 Decorations Root，集中管理 Editor 生成的裝飾物件',
            ]
        },
        tool4: {
            title: 'NavMesh 生成小地圖',
            description: '從 NavMesh 自動生成遊戲小地圖 PNG，可自訂區塊顏色並直接用在 UI 上。',
            features: [
                '透過 NavMesh.CalculateTriangulation 與 NavMesh.SamplePosition，從 NavMesh 自動換算出可走 / 不可走區域',
                '使用 Mathf.Lerp 將 3D 場景壓縮映射成 2D 貼圖座標',
                '以 BFS 計算「可走區距離障礙物」與「障礙物距離可走區」的距離場，用來控制邊緣寬度',
                '可自訂 Walkable / Edge / Blocked 顏色，並輸出 PNG 小地圖貼圖',
                '使用 AssetDatabase 與 TextureImporter 自動化 Minimap 貼圖的輸出與導入流程'
            ]
        }
    },
    eecbet: {
        title: 'EECBET 線上博弈平台',
        badges: '4人團隊',
        visitLink: '網站 Link',

        myWorkTitle: '我的負責項目',
        myWorkItems: [
            { title: '全端開發', desc: '從前端到後端的全方位開發' },
            { title: '主頁設計與開發', desc: '首頁設計，包含輪播橫幅、推薦遊戲等功能模組' },
            { title: '老虎機頁面', desc: '頁面設計，串接資料庫連動網頁更新，輪播遊戲 UI 功能' },
            { title: '會員註冊系統', desc: '多步驟註冊流程排版設計' },
            { title: '資料庫串接', desc: '搭配 Neon 雲端 PostgreSQL 服務串接' },
            { title: '整體風格統一', desc: '建立設計規範、統一 UI 元件' }
        ],

        techTitle: '技術架構',
        techStacks: [{
                title: '後端架構',
                desc: '採用經典的 MVC 架構模式，確保代碼結構清晰、易於維護與擴展',
                tags: ['ASP.NET Core', 'MVC Pattern', 'EF Core ORM', 'PostgreSQL']
            },
            {
                title: '前端整合',
                desc: '結合 ASP.NET MVC 的 Razor 視圖引擎與現代前端技術',
                tags: ['Razor Views', 'JavaScript / jQuery', 'Bootstrap CSS', '響應式設計']
            },
            {
                title: '團隊協作',
                desc: '使用 GitHub 確保團隊開發效率與代碼品質',
                tags: ['Git 版本控制', 'Code Review', '統一的規範與命名']
            }
        ]
    }
};