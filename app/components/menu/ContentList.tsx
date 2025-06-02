'use client';

import React from 'react';
import styles from './ContentList.module.scss';

interface ContentItem {
    id: string;
    title: string;
    description?: string;
    email?: string;
    status?: 'completed' | 'in-progress';
    progress?: number;
}

interface ContentListProps {
    items: ContentItem[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    category: 'students' | 'tasks' | 'dashboard';
}

const ContentList: React.FC<ContentListProps> = ({
    items,
    currentPage,
    totalPages,
    onPageChange,
    category
}) => {
    const renderItem = (item: ContentItem) => {
        switch (category) {
            case 'students':
                return (
                    <div key={item.id} className={styles.item}>
                        <h3>{item.title}</h3>
                        <p className={styles.email}>{item.email}</p>
                        {item.progress !== undefined && (
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progress}
                                    style={{ width: `${item.progress}%` }}
                                />
                                <span>{item.progress}%</span>
                            </div>
                        )}
                    </div>
                );
            case 'tasks':
                return (
                    <div key={item.id} className={styles.item}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {item.status && (
                            <span className={`${styles.status} ${styles[item.status]}`}>
                                {item.status === 'completed' ? 'Completed' : 'In Progress'}
                            </span>
                        )}
                    </div>
                );
            default:
                return (
                    <div key={item.id} className={styles.item}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                );
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {items.map(renderItem)}
            </div>
            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className={styles.pageButton}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ContentList; 