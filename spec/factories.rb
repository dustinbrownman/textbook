FactoryGirl.define do
  factory :author, :class => User do
    email {Faker::Internet.email}
    password {Faker::Lorem.words.join}
    author true
  end

  factory :student, :class => User do
    email {Faker::Internet.email}
    password {Faker::Lorem.words.join}
  end

  factory :chapter do
    name {Faker::Lorem.words.join}
    public true
    sequence(:number) {|n| n}
  end

  factory :section do
    name {Faker::Lorem.words.join}
    chapter
    public true
    sequence(:number) {|n| n}
  end

  factory :lesson do
    name {Faker::Lorem.words.join}
    body {Faker::Lorem.paragraph}
    section
    sequence(:number) {|n| n}
    public true
  end
end
