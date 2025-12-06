import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Member {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  tags?: string[];
  email?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  status?: 'online' | 'offline';
}

interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-background border border-border/50 rounded-lg shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-background/50 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                {/* Avatar */}
                <div className="flex justify-center -mt-12 mb-4">
                  <div className="relative">
                    <img
                      src={member.avatar || '/images/avatar-placeholder.jpg'}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-background object-cover shadow-lg"
                    />
                    {member.status === 'online' && (
                      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
                    )}
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-foreground">{member.name}</h2>
                  <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                </div>

                {/* Bio */}
                {member.bio && (
                  <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {/* Tags */}
                {member.tags && member.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                <div className="flex gap-3 justify-center mb-6">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                      title="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                      title="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                      title="Website"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>

                {/* Close Button */}
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
