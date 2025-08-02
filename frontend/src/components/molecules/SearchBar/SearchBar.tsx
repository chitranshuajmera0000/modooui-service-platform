import { Button } from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import { useState } from "react";


interface SearchBarProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
    className?: string;
}

export function SearchBar({
    onSearch,
    placeholder = "Search Services...",
    className
}: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    return (
        <form onSubmit={handleSubmit} className={cn('flex flex-col sm:flex-row gap-2 sm:gap-2', className)}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90 backdrop-blur-sm min-h-[44px] touch-manipulation text-gray-900"
            />
            <Button type="submit" variant="primary" className="w-full sm:w-auto whitespace-nowrap">
                <span className="hidden xs:inline">Search</span>
                <span className="xs:hidden">🔍</span>
            </Button>
        </form>
    )
}
