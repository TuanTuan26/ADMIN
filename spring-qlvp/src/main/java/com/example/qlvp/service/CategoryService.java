package com.example.qlvp.service;

import com.example.qlvp.entities.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> findAll();
    Category save(Category category);
    void update(Category category);
    void delete(Long id);
    Optional<Category> findOne(Long id);
}
