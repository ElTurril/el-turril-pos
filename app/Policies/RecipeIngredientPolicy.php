<?php

namespace App\Policies;

use App\Models\RecipeIngredient;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class RecipeIngredientPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view_any_recipe');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, RecipeIngredient $recipeIngredient): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, RecipeIngredient $recipeIngredient): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, RecipeIngredient $recipeIngredient): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, RecipeIngredient $recipeIngredient): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, RecipeIngredient $recipeIngredient): bool
    {
        return false;
    }
}
