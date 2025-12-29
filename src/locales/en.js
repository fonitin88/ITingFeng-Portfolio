// src/locales/en.js
export default {
    header: {
        name: "I TING FENG",
        about: "About",
        experience: "Experience",
        Code: "Code",
        art: "ArtWork",
        game1: "Web Game",
        web1: "Website",
    },
    about: {
        intro: `I'm a Game Developer passionate about C# programming,
    creating 3D assets, building immersive environments, and developing
    technical art solutions. I specialize in open-world environments,
    shaders, procedural generation, stylization, rendering optimization, PBR
    workflows, and more.`,

        sectionTitles: {
            skills: "Skills",
            tools: "Tools",
            education: "Education",
        },

        stats: {
            years: "years",
            games: "games",
            artworks: "artworks",
        },

        skills: {
            col1: [
                "Full-Stack",
                "Shader Graph ",
                "Gameplay scripting",
                "Custom Procedural tools",
                "C#, JavaScript, VUE, HTML5, CSS",
                "ASP.NET, SQL",
            ],
            col2: [
                "High & Low Poly Modeling",
                "Level art",
                "Stylized & Realistic creation",
                "Lighting",
                "PBR workflow",
                "VFX & particle systems",
            ],
        },

        education: {
            line1: {
                period: "2008/09~2011/07",
                degree: "Bachelor of Traditional Art",
                school: "Tainan National University",
            },
            line2: {
                period: "2025/08~2025/11",
                degree: "Full Server Engineer Training Course",
                school: "Chien Hsin University",
            },
        },
    },
    experience: {
        xlegend: {
            name: "X-Legend",
            period: "2012.4 – 2018.3",
            duration: "5 y's 11 m",
            location: "Taiwan",
            projects: {
                dragon: {
                    name: "Dragon Slayer",
                    role: "Hand-painting 3D props",
                },
                gd: {
                    name: "Glory Destiny",
                    role: "Level Art / Hand-painting 3D Props /Materials / VFX",
                },
                laplace: {
                    name: "LaPlace",
                    role: "Level Art / Hand-painting 3D Props / Materials / VFX / Props Animation",
                },
                aurakingdom: {
                    name: "Aura Kingdom",
                    role: "Level Art / Hand-painting 3D Props / Materials / VFX",
                },
            },
        },

        toppath: {
            name: "Toppath",
            period: "2018.5 – 2022.3",
            duration: "3 y's 10 m",
            location: "Taiwan",
            projects: {
                ebet: {
                    name: "eBET",
                    role: "UI / Banner / Newsletter / Video Production / 2D & 3D Game assets / VFX",
                },
            },
        },

        finifugu: {
            name: "Finifugu",
            period: "2020.2 – 2020.8",
            duration: "6 m Project",
            location: "Hong Kong",
            projects: {
                themepark: {
                    name: "ThemePark Island",
                    role: "Hand-painting 3D Props /3D Characters / Animation Setup",
                },
            },
        },

        neobards: {
            name: "Neobards",
            period: "2022.4 – 2023.10",
            duration: "1 y's 6 m",
            location: "Taiwan",
            projects: {
                dwm: {
                    name: "Dynasty Warriors M",
                    role: "Level Art / 3D assets / Scene Optimization",
                },
            },
        },

        ringtail: {
            name: "Ringtail Interactive",
            period: "2024.5 – 2025.4",
            duration: "11 m",
            location: "Sweden",
            projects: {
                scape: {
                    name: "Scape",
                    role: "Level Art / 3D assets / Scene Optimization",
                },
            },
        },
    },
    art: {
        text: "Reach out to see more of my portfolio."
    },

    contact: {
        title: "Contact Me",
        to: "To:",
        fields: {
            emailLabel: "Your Email",
            emailPlaceholder: "name@example.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "Portfolio / Collaboration...",
            messageLabel: "Message",
            messagePlaceholder: "Write your message here...",
        },
        send: "Send",
    },
    code: {
        heroBadge: 'Unity Game',

        gameplayCards1: 'Use WASD or virtual joystick to drive the van ',
        gameplayCards2: 'Press Space or light button to destroy robots with headlight.',
        gameplayCards3: 'Collect packages',
        gameplayCards4: 'Watch out for robots',
        gameplayCards5: 'Avoid the toxic gas areas',
        gameplayCards6: 'Increase speed',
        gameplayCards7: 'Restore health',
        gameplayCards8: 'Increase attack power',
        toolsTitle: 'Custom Tools',
        toolsSubtitle: 'Unity Editor tools used to quickly build and iterate on gameplay levels',
        tool1: {
            title: 'UI Events & Interaction System',
            description: 'Let players choose the van color before the game starts and instantly apply it to the player model.',
            features: [
                'Use Unity UI Button events to build the click flow for switching colors',
                'Use Renderer and Material APIs to get material instances, then control shader parameters via SetColor at runtime',
                'Store and load the selected color with PlayerPrefs to keep it across scenes',
                'Follow a data / view / controller,like separation for better maintainability and readability'
            ]
        },
        tool2: {
            title: 'Maze Generator Tool',
            description: 'Load modular pieces in the Editor and generate maze layouts with one click. Artists can still delete or tweak pieces after generation.',
            features: [
                'Build a custom EditorWindow as a dedicated maze generator panel',
                'Use PrefabUtility.InstantiatePrefab to spawn wall prefabs in Editor mode',
                'Generate maze structure with a DFS-based algorithm',
                'Use Renderer.bounds to get the actual size of wall pieces and snap them to a tile grid',
                'Use DestroyImmediate, and SceneView.RepaintAll() to support one-click generate / clear'
            ]
        },
        tool3: {
            title: 'Maze Decoration Tool',
            description: 'Detect maze wall edges and automatically place decorations like trees and rocks based on adjustable parameters.',
            features: [
                'Created a marker component and used GetComponentsInChildren() to determine decoration placement.',
                'Use Random.value and Random.Range to control density, offset from the wall, and scale range for controlled randomness',
                'Use Renderer.bounds.size to get wall thickness and combine it with wall normals to offset decorations outward correctly',
                'Used GameObject.Find() to find or create a Decorations root for managing editor-generated decorations.',
            ]
        },
        tool4: {
            title: 'NavMesh-Based Minimap Generator',
            description: 'Automatically generates a walkable-area minimap PNG from NavMesh data, with custom colors ready to be used directly in UI.',
            features: [
                'Use NavMesh.CalculateTriangulation and NavMesh.SamplePosition to convert NavMesh into walkable / unwalkable areas',
                'Use Mathf.Lerp to project the 3D world into 2D texture space',
                'Use BFS to compute distance fields from walkable to obstacles to control edge thickness',
                'Support custom Walkable / Edge / Blocked colors and export the result as a PNG minimap texture',
                'Use AssetDatabase and TextureImporter to fully automate exporting and importing the minimap texture'
            ]
        }
    },
    eecbet: {
        title: 'EECBET Online Bet',
        badges: 'Team of 4',
        visitLink: 'Visit Website',

        myWorkTitle: 'My Responsibilities',
        myWorkItems: [
            { title: 'Full-Stack Development', desc: 'End-to-end development from frontend to backend' },
            { title: 'Homepage Design & Development', desc: 'Designed the homepage modules including carousel banners and featured games' },
            { title: 'Slot Games Page', desc: 'Built the page with database-driven updates and carousel-style game UI' },
            { title: 'Member Registration System', desc: 'Designed a multi-step registration flow and layout' },
            { title: 'Database Integration', desc: 'Integrated with Neon cloud PostgreSQL service' },
            { title: 'Consistent UI Styling', desc: 'Established design guidelines and unified UI components' }
        ],

        techTitle: 'Tech Stack',
        techStacks: [{
                title: 'Backend Architecture',
                desc: 'Built with the classic MVC pattern to keep the codebase clean, maintainable, and scalable.',
                tags: ['ASP.NET Core', 'MVC Pattern', 'EF Core ORM', 'PostgreSQL']
            },
            {
                title: 'Frontend Integration',
                desc: 'Combined Razor views with modern frontend techniques inside ASP.NET MVC.',
                tags: ['Razor Views', 'JavaScript / jQuery', 'Bootstrap CSS', 'Responsive Design']
            },
            {
                title: 'Team Collaboration',
                desc: 'Used GitHub workflows to improve development efficiency and code quality.',
                tags: ['Git Version Control', 'Code Review', 'Shared Conventions & Naming']
            }
        ]
    }
};