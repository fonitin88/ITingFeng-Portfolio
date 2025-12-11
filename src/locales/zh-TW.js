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
                "Shader Graph / HLSL",
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
                '透過 Renderer 與 Material API 取得材質實例，並使用 SetColor 動態控制 Shader 參數',
                '使用 PlayerPrefs 儲存並載入玩家選擇的顏色設定，實作跨場景儲存',
                '運用 RequireComponent 與 GetComponent 自動綁定 Renderer，降低遺漏元件的錯誤風險',
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
                '透過 Renderer.bounds 取得實際尺寸，並進行 Tile Snap 排列',
                '讀取 TerrainData.size 自動換算成迷宮的 Width / Height',
                '使用 EditorUtility.DisplayDialog、DestroyImmediate、SceneView.RepaintAll() 一鍵生成與清除流程'
            ]
        },
        tool3: {
            title: '迷宮裝飾工具',
            description: '判斷迷宮牆邊並載入裝飾物件，透過調整數值自動生成樹木、石頭等物件。',
            features: [
                '透過 GetComponentsInChildren&lt;>() 掃描迷宮牆面，利用既有標記資料決定裝飾生成位置',
                '使用 Random.value、Random.Range 控制密度、牆的距離、縮放範圍，隨機但可控的生成物件',
                '使用 Renderer.bounds.size 計算牆體厚度，搭配牆的法向，去判斷朝外方向來生成物件',
                '使用 GameObject.Find 建立集中管理的 Decorations Root，統一掛載所有裝飾物件',
                '運用 Object.Instantiate 與 DestroyImmediate 在 Editor 模式中生成與清除裝飾'
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
};