// Recipe Dashboard Application
class RecipeDashboard {
    constructor() {
        this.recipes = [];
        this.filteredRecipes = [];
        this.apiKey = 'YOUR_API_KEY_HERE'; // Replace with your Spoonacular API key
        this.baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
        
        this.initializeApp();
    }

    async initializeApp() {
        // For demo purposes, we'll use mock data since we don't have a real API key
        // In a real application, you would use the Spoonacular API
        this.recipes = this.generateMockRecipes();
        this.filteredRecipes = [...this.recipes];
        
        this.renderStatistics();
        this.renderRecipes();
        this.setupEventListeners();
        
        // Hide loading message
        document.getElementById('loading-message').classList.add('hidden');
    }

    generateMockRecipes() {
        // Generate mock recipe data for demonstration
        return [
            {
                id: 1,
                title: "Classic Margherita Pizza",
                image: "https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=Pizza",
                readyInMinutes: 30,
                servings: 4,
                diets: ["vegetarian"],
                healthScore: 85
            },
            {
                id: 2,
                title: "Avocado Toast with Poached Eggs",
                image: "https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=Toast",
                readyInMinutes: 15,
                servings: 2,
                diets: ["vegetarian"],
                healthScore: 90
            },
            {
                id: 3,
                title: "Quinoa Buddha Bowl",
                image: "https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=Bowl",
                readyInMinutes: 25,
                servings: 1,
                diets: ["vegan", "gluten free"],
                healthScore: 95
            },
            {
                id: 4,
                title: "Beef Tacos with Fresh Salsa",
                image: "https://via.placeholder.com/120x120/96CEB4/FFFFFF?text=Tacos",
                readyInMinutes: 35,
                servings: 4,
                diets: [],
                healthScore: 70
            },
            {
                id: 5,
                title: "Chocolate Chip Cookies",
                image: "https://via.placeholder.com/120x120/FECA57/FFFFFF?text=Cookies",
                readyInMinutes: 45,
                servings: 12,
                diets: ["vegetarian"],
                healthScore: 60
            },
            {
                id: 6,
                title: "Mediterranean Salad",
                image: "https://via.placeholder.com/120x120/FF9FF3/FFFFFF?text=Salad",
                readyInMinutes: 20,
                servings: 2,
                diets: ["vegan", "gluten free"],
                healthScore: 92
            },
            {
                id: 7,
                title: "Chicken Stir Fry",
                image: "https://via.placeholder.com/120x120/54A0FF/FFFFFF?text=Stir+Fry",
                readyInMinutes: 25,
                servings: 3,
                diets: ["gluten free"],
                healthScore: 80
            },
            {
                id: 8,
                title: "Berry Smoothie Bowl",
                image: "https://via.placeholder.com/120x120/5F27CD/FFFFFF?text=Smoothie",
                readyInMinutes: 10,
                servings: 1,
                diets: ["vegan", "gluten free"],
                healthScore: 88
            },
            {
                id: 9,
                title: "Mushroom Risotto",
                image: "https://via.placeholder.com/120x120/FF9F43/FFFFFF?text=Risotto",
                readyInMinutes: 40,
                servings: 4,
                diets: ["vegetarian"],
                healthScore: 75
            },
            {
                id: 10,
                title: "Salmon with Roasted Vegetables",
                image: "https://via.placeholder.com/120x120/EE5A24/FFFFFF?text=Salmon",
                readyInMinutes: 35,
                servings: 2,
                diets: ["gluten free"],
                healthScore: 85
            }
        ];
    }

    renderStatistics() {
        const totalRecipes = this.recipes.length;
        const avgPrepTime = Math.round(
            this.recipes.reduce((sum, recipe) => sum + recipe.readyInMinutes, 0) / totalRecipes
        );
        const vegetarianCount = this.recipes.filter(recipe => 
            recipe.diets.includes('vegetarian')
        ).length;

        document.getElementById('total-recipes').textContent = totalRecipes;
        document.getElementById('avg-prep-time').textContent = `${avgPrepTime} min`;
        document.getElementById('vegetarian-count').textContent = vegetarianCount;
    }

    renderRecipes() {
        const recipesList = document.getElementById('recipes-list');
        
        if (this.filteredRecipes.length === 0) {
            recipesList.innerHTML = '<p class="no-results">No recipes found matching your criteria.</p>';
            return;
        }

        recipesList.innerHTML = this.filteredRecipes.map(recipe => `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <div class="recipe-info">
                    <h3>${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span>⏱ ${recipe.readyInMinutes} min</span>
                        <span>👥 ${recipe.servings} servings</span>
                        <span>❤️ ${recipe.healthScore} health</span>
                    </div>
                    ${recipe.diets.length > 0 ? `
                        <div class="recipe-diets">
                            ${recipe.diets.map(diet => `<span class="diet-tag">${diet}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        const searchInput = document.getElementById('search-input');
        const dietFilter = document.getElementById('diet-filter');

        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        dietFilter.addEventListener('change', (e) => {
            this.handleDietFilter(e.target.value);
        });
    }

    handleSearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        this.filteredRecipes = this.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(term)
        );
        
        this.renderRecipes();
    }

    handleDietFilter(diet) {
        if (!diet) {
            this.filteredRecipes = [...this.recipes];
        } else {
            this.filteredRecipes = this.recipes.filter(recipe =>
                recipe.diets.includes(diet)
            );
        }
        
        // Re-apply search filter if there's a search term
        const searchTerm = document.getElementById('search-input').value;
        if (searchTerm) {
            this.handleSearch(searchTerm);
        } else {
            this.renderRecipes();
        }
    }
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RecipeDashboard();
});